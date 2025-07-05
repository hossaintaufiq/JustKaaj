"use client";
import { useState } from "react";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);

  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, State 12345",
    avatar: "👤"
  };

  const serviceHistory = [
    {
      id: 1,
      service: "Home Cleaning",
      date: "2024-12-15",
      status: "Completed",
      provider: "CleanPro Services",
      amount: "$150"
    },
    {
      id: 2,
      service: "Office Cleaning",
      date: "2024-12-10",
      status: "Completed",
      provider: "OfficeClean Solutions",
      amount: "$300"
    },
    {
      id: 3,
      service: "Event Services",
      date: "2024-12-05",
      status: "Scheduled",
      provider: "Event Masters",
      amount: "$500"
    }
  ];

  // Calculate profile completion (simple: name, email, phone, address)
  const userFields = ["name", "email", "phone", "address"];
  const userCompleted = userFields.filter(
    (field) => (userData as Record<string, string>)[field] && (userData as Record<string, string>)[field].toString().trim() !== ""
  ).length;
  const userCompletionPercent = Math.round((userCompleted / userFields.length) * 100);

  // SVG Progress Circle Component
  function ProgressCircle({ percent }: { percent: number }) {
    const radius = 32;
    const stroke = 6;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percent / 100) * circumference;
    return (
      <svg height={radius * 2} width={radius * 2} className="block mx-auto">
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#22c55e"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="1.1rem"
          fill="#111827"
          fontWeight="bold"
        >
          {percent}%
        </text>
      </svg>
    );
  }

  // Add interfaces and mock data for My Orders section
  interface ChatMessage {
    sender: "provider" | "user";
    message: string;
    time: string;
  }

  interface UserOrder {
    id: number;
    providerName: string;
    providerPhone: string;
    providerEmail: string;
    serviceName: string;
    date: string;
    time: string;
    address: string;
    status: "pending" | "ongoing" | "completed" | "cancelled";
    price: number;
    description: string;
    chat: ChatMessage[];
  }

  const mockUserOrders: UserOrder[] = [
    {
      id: 1,
      providerName: "CleanPro Services",
      providerPhone: "+880 1712-111222",
      providerEmail: "contact@cleanpro.com",
      serviceName: "Home Cleaning",
      date: "2024-01-15",
      time: "10:00 AM",
      address: "House #123, Road #5, Dhanmondi, Dhaka",
      status: "ongoing",
      price: 1500,
      description: "Full house cleaning including kitchen and bathrooms",
      chat: [
        { sender: "provider", message: "I'll be there in 15 minutes", time: "09:32 AM" },
        { sender: "user", message: "Thank you!", time: "09:33 AM" }
      ]
    },
    {
      id: 2,
      providerName: "CarCare Dhaka",
      providerPhone: "+880 1812-333444",
      providerEmail: "info@carcare.com",
      serviceName: "Car Wash",
      date: "2024-01-14",
      time: "2:00 PM",
      address: "Parking Lot, Bashundhara City, Dhaka",
      status: "completed",
      price: 800,
      description: "Exterior and interior car cleaning",
      chat: [
        { sender: "provider", message: "Service completed successfully", time: "3:30 PM" },
        { sender: "user", message: "Great job!", time: "3:31 PM" }
      ]
    },
    {
      id: 3,
      providerName: "PlumbRight",
      providerPhone: "+880 1912-555666",
      providerEmail: "support@plumbright.com",
      serviceName: "Plumbing",
      date: "2024-01-16",
      time: "11:00 AM",
      address: "Apartment #5B, Gulshan-2, Dhaka",
      status: "pending",
      price: 2000,
      description: "Fix leaking kitchen faucet",
      chat: []
    }
  ];

  // Add state for My Orders section
  const [selectedOrder, setSelectedOrder] = useState<UserOrder | null>(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
            <div className="flex flex-col sm:flex-row items-center w-full md:w-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-0 sm:mr-6">
                {userData.avatar}
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">{userData.name}</h1>
                <p className="text-gray-600 text-sm sm:text-base">User Account</p>
                <p className="text-xs sm:text-sm text-gray-500">Member since December 2024</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:ml-4 mt-4 md:mt-0 w-full md:w-auto">
              <ProgressCircle percent={userCompletionPercent} />
              <span className="mt-2 text-xs text-gray-500">Profile Completion</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex overflow-x-auto px-4 sm:px-6">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`py-4 px-2 sm:px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap ${
                    activeTab === "overview"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`py-4 px-2 sm:px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap ${
                    activeTab === "profile"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab("services")}
                  className={`py-4 px-2 sm:px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap ${
                    activeTab === "services"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Service History
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`py-4 px-2 sm:px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap ${
                    activeTab === "orders"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  My Orders
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`py-4 px-2 sm:px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap ${
                    activeTab === "settings"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Settings
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "overview" && (
                <>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">User Overview</h2>
                  <div className="bg-gray-50 rounded-lg shadow p-4 sm:p-6 max-w-2xl">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl mr-4">
                        {userData.avatar}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{userData.name}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">User Account</p>
                        <p className="text-xs sm:text-sm text-gray-500">Member since December 2024</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="block text-xs text-gray-500">Email</span>
                        <span className="block text-base text-gray-900">{userData.email}</span>
                      </div>
                      <div>
                        <span className="block text-xs text-gray-500">Phone</span>
                        <span className="block text-base text-gray-900">{userData.phone}</span>
                      </div>
                      <div className="md:col-span-2">
                        <span className="block text-xs text-gray-500">Address</span>
                        <span className="block text-base text-gray-900">{userData.address}</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeTab === "profile" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {isEditing ? "Save Changes" : "Edit Profile"}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={userData.name}
                        disabled={!isEditing}
                        className={`w-full px-3 py-2 border rounded-md ${
                          isEditing
                            ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue={userData.email}
                        disabled={!isEditing}
                        className={`w-full px-3 py-2 border rounded-md ${
                          isEditing
                            ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue={userData.phone}
                        disabled={!isEditing}
                        className={`w-full px-3 py-2 border rounded-md ${
                          isEditing
                            ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <textarea
                        defaultValue={userData.address}
                        disabled={!isEditing}
                        rows={3}
                        className={`w-full px-3 py-2 border rounded-md ${
                          isEditing
                            ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "services" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Service History</h2>
                  <div className="space-y-4">
                    {serviceHistory.map((service) => (
                      <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-900">{service.service}</h3>
                            <p className="text-sm text-gray-600">Provider: {service.provider}</p>
                            <p className="text-sm text-gray-500">Date: {service.date}</p>
                          </div>
                          <div className="text-right">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              service.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {service.status}
                            </span>
                            <p className="text-lg font-semibold text-gray-900 mt-1">{service.amount}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">My Orders</h2>
                  <div className="grid gap-4">
                    {mockUserOrders.map((order: UserOrder) => (
                      <div key={order.id} className="bg-white border border-green-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{order.serviceName}</h3>
                            <p className="text-gray-600">Provider: {order.providerName}</p>
                            <p className="text-gray-600">{order.date} at {order.time}</p>
                            <p className="text-green-600 font-medium">৳{order.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                            <button
                              onClick={() => {
                                setSelectedOrder(order);
                                setShowOrderDetails(true);
                              }}
                              className="text-green-600 hover:text-green-700 text-sm font-medium"
                            >
                              View Details
                            </button>
                            {order.status !== "completed" && order.status !== "cancelled" && (
                              <button
                                onClick={() => handleCancelOrder(order.id)}
                                className="text-red-500 hover:text-red-700 text-xs font-bold border border-red-200 rounded px-2 py-1 ml-2"
                              >
                                Cancel
                              </button>
                            )}
                          </div>
                        </div>
                        {order.status === "ongoing" && (
                          <div className="border-t border-green-100 pt-4">
                            {/* Chat Section */}
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="text-sm font-medium text-gray-900 mb-2">Chat with {order.providerName}</div>
                              <div className="max-h-32 overflow-y-auto space-y-2 mb-3">
                                {order.chat.map((msg: ChatMessage, idx: number) => (
                                  <div key={idx} className={`text-sm ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                    <div className={`inline-block px-3 py-1 rounded-lg ${
                                      msg.sender === 'user' 
                                        ? 'bg-green-500 text-white' 
                                        : 'bg-gray-200 text-gray-900'
                                    }`}>
                                      {msg.message}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
                                  </div>
                                ))}
                              </div>
                              <div className="flex space-x-2">
                                <input
                                  type="text"
                                  value={newMessage}
                                  onChange={(e) => setNewMessage(e.target.value)}
                                  placeholder="Type your message..."
                                  className="flex-1 px-3 py-1 border border-gray-300 rounded text-sm text-gray-900"
                                />
                                <button
                                  onClick={() => sendMessage(order.id)}
                                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                                >
                                  Send
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Order Details Modal */}
                  {showOrderDetails && selectedOrder && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">Order Details</h3>
                          <button
                            onClick={() => setShowOrderDetails(false)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Provider Name</label>
                            <p className="text-gray-900">{selectedOrder.providerName}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <p className="text-gray-900">{selectedOrder.providerPhone}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <p className="text-gray-900">{selectedOrder.providerEmail}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Service Address</label>
                            <p className="text-gray-900">{selectedOrder.address}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Service Details</label>
                            <p className="text-gray-900">{selectedOrder.description}</p>
                          </div>
                          <div className="flex justify-between">
                            <div>
                              <label className="block text-sm font-medium text-gray-700">Date & Time</label>
                              <p className="text-gray-900">{selectedOrder.date} at {selectedOrder.time}</p>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700">Price</label>
                              <p className="text-green-600 font-semibold">৳{selectedOrder.price}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                          <button
                            onClick={() => setShowOrderDetails(false)}
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "settings" && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-1 focus:ring-green-500"
                          />
                        </div>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                          Update Password
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" defaultChecked />
                          <span className="ml-2 text-sm text-gray-700">Email notifications</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" defaultChecked />
                          <span className="ml-2 text-sm text-gray-700">SMS notifications</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                          <span className="ml-2 text-sm text-gray-700">Marketing emails</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Add helper functions for status color, cancel, and send message
function getStatusColor(status: string) {
  switch (status) {
    case "pending": return "bg-yellow-100 text-yellow-800";
    case "ongoing": return "bg-blue-100 text-blue-800";
    case "completed": return "bg-green-100 text-green-800";
    case "cancelled": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
}
function handleCancelOrder(orderId: number) {
  alert(`Order ${orderId} cancelled.`);
}
function sendMessage(orderId: number) {
  alert(`Message sent to provider for order ${orderId}.`);
} 