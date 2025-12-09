/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetAllMessagesFromASender, SendMessage } from "@/service/chat";
import { Message } from "@/types/message";
import React, { useEffect, useState, useRef } from "react";

type ChatModalProps = {
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>;
  showChat: boolean;
  selectedUser: {
    userId: string;
    fullName?: string;
  } | null;
  setSelectedChatUser: React.Dispatch<React.SetStateAction<any>>;
};

const ChatModal: React.FC<ChatModalProps> = ({
  setShowChat,
  showChat,
  setSelectedChatUser,
  selectedUser,
}) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const lastMessageIdRef = useRef<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // 🟢 Fetch messages and auto-refresh
  useEffect(() => {
    if (!showChat || !selectedUser) return;

    const fetchMessages = async () => {
      try {
        const res = await GetAllMessagesFromASender(selectedUser.userId);
        const newMessages = res?.data || [];
        // Only scroll if a new message arrived
        const lastMessageId =
          newMessages.length > 0
            ? newMessages[newMessages.length - 1].receiverId +
              newMessages[newMessages.length - 1].senderId +
              newMessages[newMessages.length - 1].message
            : null;

        if (lastMessageId !== lastMessageIdRef.current) {
          lastMessageIdRef.current = lastMessageId;
          setMessages(newMessages);
          scrollToBottom();
        } else {
          setMessages(newMessages);
        }
      } catch (err) {
        console.error("Error loading chat messages:", err);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [showChat, selectedUser]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedUser?.userId) return;
    try {
      await SendMessage(newMessage, selectedUser.userId);
      setNewMessage("");
      const res = await GetAllMessagesFromASender(selectedUser.userId);
      setMessages(res?.data || []);
      scrollToBottom();
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/20"
      onClick={() => {
        setShowChat(false);
        setSelectedChatUser(null);
      }}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md mx-4 p-4 relative shadow-xl flex flex-col h-[500px] text-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            setShowChat(false);
            setSelectedChatUser(null);
          }}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✖
        </button>

        <h2 className="text-lg font-semibold mb-2">
          Chat with{" "}
          <span className="text-green-400">{selectedUser?.fullName}</span>
        </h2>

        <div className="flex-1 overflow-y-auto border rounded-xl p-3 mb-3 space-y-2 bg-gray-50">
          {messages.length === 0 ? (
            <p className="text-center text-gray-400 text-sm mt-20">
              No messages yet 👋
            </p>
          ) : (
            messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.senderId === selectedUser?.userId
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-xl max-w-[70%] text-sm ${
                    msg.senderId === selectedUser?.userId
                      ? "bg-gray-200 text-black"
                      : "bg-green-600 text-white"
                  }`}
                >
                  {msg.message}
                  <span className="block text-[10px] text-gray-700 mt-1 text-right">
                    {new Date(msg.createdAt).toLocaleString([], {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
          />
          <button
            onClick={handleSendMessage}
            className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
