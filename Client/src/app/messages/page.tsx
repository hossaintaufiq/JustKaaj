"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  GetAllChatUsers,
  GetAllMessagesFromASender,
  SendMessage,
} from "@/service/chat";
import Navbar from "@/Component/Shared/Navbar";
import { ChatUser, Message } from "@/types/message";

export default function MessagePage() {
  const [users, setUsers] = useState<ChatUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<ChatUser | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastMessageIdRef = useRef<string | null>(null);

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fetch chat users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await GetAllChatUsers();
        setUsers(res.data || []);
      } catch (err) {
        console.error("Failed to load chat users", err);
      }
    };
    fetchUsers();
    const interval = setInterval(fetchUsers, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fetch messages and auto-refresh
  useEffect(() => {
    if (!selectedUser) return;

    const fetchMessages = async () => {
      try {
        const res = await GetAllMessagesFromASender(selectedUser.user_id);
        const newMessages = res.data || [];

        // Only scroll if there is a new message
        const lastMessageId = newMessages.length
          ? newMessages[newMessages.length - 1].id
          : null;

        if (lastMessageId !== lastMessageIdRef.current) {
          lastMessageIdRef.current = lastMessageId;
          setMessages(newMessages);
          scrollToBottom();
        } else {
          setMessages(newMessages); // update without scrolling
        }
      } catch (err) {
        console.error("Failed to load messages", err);
      }
    };

    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [selectedUser]);

  // Send message
  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedUser) return;
    setLoading(true);
    try {
      await SendMessage(newMessage, selectedUser.user_id);
      setNewMessage("");
      const res = await GetAllMessagesFromASender(selectedUser.user_id);
      setMessages(res.data || []);
      scrollToBottom();
    } catch (err) {
      console.error("Failed to send message", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-[100vh] md:h-[90vh] bg-white border rounded-xl shadow-sm overflow-hidden">
        {/* Sidebar - Users */}
        <aside className="w-1/3 md:w-1/4 border-r bg-gray-50/70 backdrop-blur-sm overflow-y-auto">
          <h2 className="text-lg font-semibold p-4 border-b bg-white sticky top-0 z-10 text-gray-700">
            Messages
          </h2>
          <div>
            {users.length === 0 && (
              <p className="text-gray-500 text-center py-8">No chats yet</p>
            )}
            {users.map((user) => (
              <div
                key={user.user_id}
                onClick={() => setSelectedUser(user)}
                className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg mx-2 my-1 transition-all duration-200 ${
                  selectedUser?.user_id === user.user_id
                    ? "bg-green-100 border-l-4 border-green-500 shadow-sm"
                    : "hover:bg-green-50"
                }`}
              >
                <div className="w-10 h-10 rounded-full border border-gray-200 overflow-hidden flex items-center justify-center">
                  {user.profileImage ? (
                    <Image
                      src={user.profileImage || "/default-avatar.png"}
                      alt={user.fullName}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-green-50 text-green-700 font-semibold text-base shadow-sm">
                      {user.fullName.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-gray-800">
                    {user.fullName}
                  </p>
                  <p className="text-xs text-gray-500">Tap to chat</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Window */}
        <main className="flex-1 flex flex-col bg-gray-50">
          {selectedUser ? (
            <>
              {/* Header */}
              <div className="flex items-center gap-3 p-3 border-b bg-white shadow-sm sticky top-0 z-10">
                <div className="w-10 h-10 rounded-full border border-gray-200 overflow-hidden flex items-center justify-center">
                  {selectedUser.profileImage ? (
                    <Image
                      src={selectedUser.profileImage || "/default-avatar.png"}
                      alt={selectedUser.fullName}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-green-50 text-green-700 font-semibold text-base shadow-sm">
                      {selectedUser.fullName.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-gray-800">
                  {selectedUser.fullName}
                </h3>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                {messages.length === 0 && (
                  <p className="text-gray-500 text-center mt-10">
                    No messages yet. Start chatting!
                  </p>
                )}
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.senderId === selectedUser.user_id
                        ? "justify-start"
                        : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-sm transition-all duration-200 ${
                        msg.senderId === selectedUser.user_id
                          ? "bg-white text-gray-800 border border-gray-100"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      <p>{msg.message}</p>
                      <span className="block text-[10px] text-gray-500 mt-1 text-right">
                        {new Date(msg.createdAt).toLocaleString([], {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-3 border-t bg-white flex items-center gap-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none bg-gray-50"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={loading}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition disabled:opacity-50 shadow-sm"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a chat to start messaging 💬
            </div>
          )}
        </main>
      </div>
    </>
  );
}
