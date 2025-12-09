"use client";
import { useState } from "react";
import Image from "next/image";
import { Bell, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const dummyNotifications = [
  {
    id: "1",
    type: "message",
    user: { name: "Ariana Smith", avatar: "/default-avatar.png" },
    text: "sent you a new message",
    time: "2m ago",
    unread: true,
  },
  {
    id: "2",
    type: "order",
    user: { name: "John Miller", avatar: "/default-avatar.png" },
    text: "Your order #A452 has been marked as completed",
    time: "1h ago",
    unread: false,
  },
  {
    id: "3",
    type: "system",
    user: { name: "System", avatar: "" },
    text: "We’ve updated our terms of service",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "4",
    type: "system",
    user: { name: "System", avatar: "" },
    text: "We’ve updated our terms of service",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "5",
    type: "system",
    user: { name: "System", avatar: "" },
    text: "We’ve updated our terms of service",
    time: "Yesterday",
    unread: false,
  },
];

export default function NotificationBell() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* 🔔 Bell Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`relative p-2 rounded-full hover:bg-green-50 transition ${
          pathname === "/notifications" ? "text-green-600" : "text-gray-600"
        }`}
      >
        <Bell className="w-5 h-5" />
        <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
          5
        </span>
      </button>

      {/* 🔽 Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Transparent overlay to close modal on click outside */}
            <motion.div
              className="fixed inset-0 z-30 bg-black/10"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="absolute right-0 mt-3 w-80 bg-white border rounded-xl shadow-lg z-40 overflow-hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-50">
                <h3 className="font-semibold text-gray-800">Notifications</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Notification list */}
              <div className="max-h-96 overflow-y-auto">
                {dummyNotifications.map((n) => (
                  <div
                    key={n.id}
                    className={`flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition ${
                      n.unread ? "bg-green-50" : ""
                    }`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
                      {n.user.avatar ? (
                        <Image
                          src={n.user.avatar}
                          alt={n.user.name}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-gray-600 font-semibold">
                          {n.user.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-gray-800 leading-snug">
                        <span className="font-medium">{n.user.name}</span>{" "}
                        {n.text}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
