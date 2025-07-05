"use client";
import { useState } from "react";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import React from "react";
import { allCategories } from "@/app/service/categoriesData";

const mockServiceRequests = [
  {
    id: 1,
    customerName: "Ahmed Khan",
    customerPhone: "+880 1712-345678",
    customerEmail: "ahmed.khan@email.com",
    serviceName: "Home Cleaning",
    date: "2024-01-15",
    time: "10:00 AM",
    address: "House #123, Road #5, Dhanmondi, Dhaka",
    status: "ongoing",
    price: 1500,
    description: "Full house cleaning including kitchen and bathrooms",
    chat: [
      { sender: "customer", message: "Hi, when will you arrive?", time: "09:30 AM" },
      { sender: "provider", message: "I'll be there in 15 minutes", time: "09:32 AM" },
      { sender: "provider", message: "I'm on my way, traffic is a bit heavy", time: "09:45 AM" }
    ]
  },
  {
    id: 2,
    customerName: "Fatima Rahman",
    customerPhone: "+880 1812-345679",
    customerEmail: "fatima.rahman@email.com",
    serviceName: "Car Wash",
    date: "2024-01-14",
    time: "2:00 PM",
    address: "Parking Lot, Bashundhara City, Dhaka",
    status: "completed",
    price: 800,
    description: "Exterior and interior car cleaning",
    chat: [
      { sender: "customer", message: "Service completed successfully", time: "3:30 PM" },
      { sender: "provider", message: "Thank you! Please rate our service", time: "3:32 PM" }
    ]
  },
  {
    id: 3,
    customerName: "Rahim Ali",
    customerPhone: "+880 1912-345680",
    customerEmail: "rahim.ali@email.com",
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

export default function ProviderProfile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [statusUpdate, setStatusUpdate] = useState("");

  const providerData = {
    registration_id: 1001,
    full_name: "Jane Smith",
    business_name: "CleanPro Services",
    nid_number: "1234567890",
    business_license: "BL-2023-001",
    govt_id_or_tin: "TIN-987654321",
    facebook_profile: "https://facebook.com/cleanpro",
    website_link: "https://cleanpro.com",
    area_name: "Downtown",
    postal_code: "54321",
    phone_number: "+1 (555) 987-6543",
    category: "Cleaning",
    email: "contact@cleanpro.com",
    password_hash: "********",
    status: "Active",
    submitted_at: "2024-06-01T10:00:00Z",
    reviewed_at: "2024-06-02T15:00:00Z",
    reviewer_id: 2002,
    avatar: "🏢"
  };

  const managedServices = [
    {
      id: 1,
      service: "Home Cleaning",
      status: "Active",
      bookings: 120,
      rating: 4.8
    },
    {
      id: 2,
      service: "Office Cleaning",
      status: "Active",
      bookings: 80,
      rating: 4.7
    },
    {
      id: 3,
      service: "Event Services",
      status: "Inactive",
      bookings: 15,
      rating: 4.5
    }
  ];

  // List of editable fields for completion calculation
  const editableFields = [
    "full_name",
    "business_name",
    "nid_number",
    "business_license",
    "govt_id_or_tin",
    "facebook_profile",
    "website_link",
    "area_name",
    "postal_code",
    "phone_number",
    "category",
    "email",
    "password_hash",
    "submitted_at"
  ];

  // Calculate completion percentage
  const completedCount = editableFields.filter(
    (field) => (providerData as Record<string, string | number>)[field] && (providerData as Record<string, string | number>)[field].toString().trim() !== ""
  ).length;
  const completionPercent = Math.round((completedCount / editableFields.length) * 100);

  const handleStatusUpdate = (serviceId: number, newStatus: string) => {
    // In real app, this would update the database
    console.log(`Service ${serviceId} status updated to ${newStatus}`);
  };

  const sendMessage = (serviceId: number) => {
    if (newMessage.trim()) {
      // In real app, this would send to backend
      console.log(`Sending message to service ${serviceId}: ${newMessage}`);
      setNewMessage("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "ongoing": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="bg-white rounded-lg shadow-sm border border-green-100">
            {/* Header */}
            <div className="border-b border-green-100 px-6 py-4">
              <h1 className="text-2xl font-bold text-gray-900">Service Provider Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your services and customer interactions</p>
            </div>

            {/* Tabs */}
            <div className="border-b border-green-100">
              <nav className="flex overflow-x-auto px-4 sm:px-6">
                {[
                  { id: "profile", name: "Profile" },
                  { id: "services", name: "Add Services" },
                  { id: "manage", name: "Manage Services" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 sm:px-4 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-green-500 text-green-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "profile" && <ProfileForm />}
              {activeTab === "services" && <ServiceForm />}
              {activeTab === "manage" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">Service Requests</h2>
                    <div className="flex space-x-2">
                      <select className="px-3 py-2 border border-gray-300 rounded-md text-gray-900">
                        <option value="">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {mockServiceRequests.map((service: any) => (
                      <div key={service.id} className="bg-white border border-green-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{service.serviceName}</h3>
                            <p className="text-gray-600">{service.customerName} • {service.date} at {service.time}</p>
                            <p className="text-green-600 font-medium">৳{service.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                              {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                            </span>
                            <button
                              onClick={() => {
                                setSelectedService(service);
                                setShowCustomerDetails(true);
                              }}
                              className="text-green-600 hover:text-green-700 text-sm font-medium"
                            >
                              View Details
                            </button>
                          </div>
                        </div>

                        {service.status === "ongoing" && (
                          <div className="border-t border-green-100 pt-4">
                            <div className="flex items-center space-x-4 mb-3">
                              <select
                                value={statusUpdate}
                                onChange={(e) => setStatusUpdate(e.target.value)}
                                className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-900"
                              >
                                <option value="">Update Status</option>
                                <option value="on_way">On My Way</option>
                                <option value="arrived">Arrived</option>
                                <option value="working">Working</option>
                                <option value="completed">Completed</option>
                              </select>
                              <button
                                onClick={() => handleStatusUpdate(service.id, statusUpdate)}
                                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                              >
                                Update
                              </button>
                            </div>
                            
                            {/* Chat Section */}
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="text-sm font-medium text-gray-900 mb-2">Chat with {service.customerName}</div>
                              <div className="max-h-32 overflow-y-auto space-y-2 mb-3">
                                {service.chat.map((msg: any, idx: number) => (
                                  <div key={idx} className={`text-sm ${msg.sender === 'provider' ? 'text-right' : 'text-left'}`}>
                                    <div className={`inline-block px-3 py-1 rounded-lg ${
                                      msg.sender === 'provider' 
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
                                  onClick={() => sendMessage(service.id)}
                                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                                >
                                  Send
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {service.status === "pending" && (
                          <div className="border-t border-green-100 pt-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleStatusUpdate(service.id, "ongoing")}
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
                              >
                                Accept Service
                              </button>
                              <button
                                onClick={() => handleStatusUpdate(service.id, "rejected")}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
                              >
                                Decline
                              </button>
                            </div>
                          </div>
                        )}

                        {service.status === "completed" && (
                          <div className="border-t border-green-100 pt-4">
                            <div className="text-sm text-gray-600">
                              Service completed on {service.date}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Customer Details Modal */}
        {showCustomerDetails && selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Customer Details</h3>
                <button
                  onClick={() => setShowCustomerDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                  <p className="text-gray-900">{selectedService.customerName}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <p className="text-gray-900">{selectedService.customerPhone}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="text-gray-900">{selectedService.customerEmail}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Service Address</label>
                  <p className="text-gray-900">{selectedService.address}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Service Details</label>
                  <p className="text-gray-900">{selectedService.description}</p>
                </div>
                
                <div className="flex justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date & Time</label>
                    <p className="text-gray-900">{selectedService.date} at {selectedService.time}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <p className="text-green-600 font-semibold">৳{selectedService.price}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowCustomerDetails(false)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function ProfileForm() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);

  const providerData: Record<string, string | number> = {
    registration_id: 1001,
    full_name: "Jane Smith",
    business_name: "CleanPro Services",
    nid_number: "1234567890",
    business_license: "BL-2023-001",
    govt_id_or_tin: "TIN-987654321",
    facebook_profile: "https://facebook.com/cleanpro",
    website_link: "https://cleanpro.com",
    area_name: "Downtown",
    postal_code: "54321",
    phone_number: "+1 (555) 987-6543",
    category: "Cleaning",
    email: "contact@cleanpro.com",
    password_hash: "********",
    status: "Active",
    submitted_at: "2024-06-01T10:00:00Z",
    reviewed_at: "2024-06-02T15:00:00Z",
    reviewer_id: 2002,
    avatar: "🏢"
  };

  const managedServices = [
    {
      id: 1,
      service: "Home Cleaning",
      status: "Active",
      bookings: 120,
      rating: 4.8
    },
    {
      id: 2,
      service: "Office Cleaning",
      status: "Active",
      bookings: 80,
      rating: 4.7
    },
    {
      id: 3,
      service: "Event Services",
      status: "Inactive",
      bookings: 15,
      rating: 4.5
    }
  ];

  // Calculate completion percentage
  const completedCount = Object.keys(providerData).filter(
    (key) => providerData[key] && providerData[key].toString().trim() !== ""
  ).length;
  const completionPercent = Math.round((completedCount / Object.keys(providerData).length) * 100);

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center w-full md:w-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-0 sm:mr-6">
            {providerData.avatar}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">{providerData.business_name}</h1>
            <p className="text-gray-600 text-sm sm:text-base">Service Provider</p>
            <p className="text-xs sm:text-sm text-gray-500">Owner: {providerData.full_name}</p>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${providerData.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"}`}>{providerData.status}</span>
          </div>
        </div>
        <div className="flex flex-col items-center md:ml-4 mt-4 md:mt-0 w-full md:w-auto">
          <ProgressCircle percent={completionPercent} />
          <span className="mt-2 text-xs text-gray-500">Profile Completion</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "overview"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("edit")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "edit"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Edit Profile
            </button>
            <button
              onClick={() => setActiveTab("serviceDetails")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "serviceDetails"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Service Details
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
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
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Provider Overview</h2>
              {/* Service Details Card/List (was in Service Details tab) */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6 flex flex-col sm:flex-row items-center gap-6">
                <div>
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-2xl mb-2">
                    {providerData.avatar}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-green-700">{providerData.business_name}</span>
                    <span className="ml-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-semibold">Verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-500 text-xs font-semibold mb-1">
                    <span>★★★★☆</span>
                    <span className="text-gray-800 ml-1">4.8</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-700 mb-2">
                    <span className="bg-green-50 px-2 py-0.5 rounded">{providerData.area_name}</span>
                    <span className="bg-green-50 px-2 py-0.5 rounded">5+ years exp</span>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "edit" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Edit Profile</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {isEditing ? "Save Changes" : "Edit Info"}
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Registration ID (read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Registration ID</label>
                  <input type="text" value={providerData.registration_id} disabled className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-50" />
                </div>
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" defaultValue={providerData.full_name} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* Business Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                  <input type="text" defaultValue={providerData.business_name} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* NID Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">NID Number</label>
                  <input type="text" defaultValue={providerData.nid_number} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* Business License */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business License</label>
                  <input type="text" defaultValue={providerData.business_license} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* Govt ID or TIN */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Govt ID or TIN</label>
                  <input type="text" defaultValue={providerData.govt_id_or_tin} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* Facebook Profile */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Facebook Profile</label>
                  <input type="text" defaultValue={providerData.facebook_profile} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* Website Link */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website Link</label>
                  <input type="text" defaultValue={providerData.website_link} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* Area Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area Name</label>
                  <input type="text" defaultValue={providerData.area_name} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* Postal Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                  <input type="text" defaultValue={providerData.postal_code} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="text" defaultValue={providerData.phone_number} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <input type="text" defaultValue={providerData.category} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" defaultValue={providerData.email} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* Password Hash */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password Hash</label>
                  <input type="password" defaultValue={providerData.password_hash} disabled={!isEditing} className={`w-full px-3 py-2 border rounded-md ${isEditing ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500" : "border-gray-200 bg-gray-50"}`} />
                </div>
                {/* Status (read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <input type="text" value={providerData.status} disabled className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-50" />
                </div>
                {/* Submitted At */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Submitted At</label>
                  <span className="block text-base text-gray-900">{typeof providerData.submitted_at === 'string' ? providerData.submitted_at.replace('T', ' ').replace('Z', '') : providerData.submitted_at}</span>
                </div>
                {/* Reviewed At (read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reviewed At</label>
                  <span className="block text-base text-gray-900">{typeof providerData.reviewed_at === 'string' ? providerData.reviewed_at.replace('T', ' ').replace('Z', '') : providerData.reviewed_at}</span>
                </div>
                {/* Reviewer ID (read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reviewer ID</label>
                  <input type="text" value={providerData.reviewer_id} disabled className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-50" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "serviceDetails" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Service Details (Edit)</h2>
              {/* Service Details Form (was in Overview) */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-bold text-green-700 mb-4">Add or Edit Your Services (max 5)</h3>
                <ServiceForm />
              </div>
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
  );
}

function ServiceForm() {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [services, setServices] = useState([
    { name: "", description: "", price: "", status: "Active", area: "", availability: weekDays.map(day => ({ day, type: "alwaysFree", start: "09:00", end: "18:00" })) }
  ]);

  const handleServiceChange = (idx: number, field: string, value: string) => {
    setServices(prev => prev.map((s, i) => i === idx ? { ...s, [field]: value } : s));
  };

  const handleAvailabilityChange = (serviceIdx: number, dayIdx: number, field: string, value: string) => {
    setServices(prev => prev.map((s, i) => {
      if (i !== serviceIdx) return s;
      const newAvail = s.availability.map((a, j) =>
        j === dayIdx ? { ...a, [field]: value } : a
      );
      // If type is set to alwaysFree, reset start/end to default
      if (field === "type" && value === "alwaysFree") {
        newAvail[dayIdx].start = "09:00";
        newAvail[dayIdx].end = "18:00";
      }
      return { ...s, availability: newAvail };
    }));
  };

  const addService = () => {
    if (services.length < 5) setServices([
      ...services,
      { name: "", description: "", price: "", status: "Active", area: "", availability: weekDays.map(day => ({ day, type: "alwaysFree", start: "09:00", end: "18:00" })) }
    ]);
  };

  const removeService = (idx: number) => {
    setServices(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-6">
      {services.map((service, idx) => (
        <div key={idx} className="border border-green-100 rounded-lg p-4 bg-green-50 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Service Name</label>
              <select
                value={service.name}
                onChange={e => handleServiceChange(idx, "name", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
                required
              >
                <option value="">Select a category</option>
                {allCategories.map((cat, i) => (
                  <option key={i} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Price (৳)</label>
              <input
                type="number"
                value={service.price}
                onChange={e => handleServiceChange(idx, "price", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
                placeholder="e.g. 1500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Area</label>
              <input
                type="text"
                value={service.area}
                onChange={e => handleServiceChange(idx, "area", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
                placeholder="e.g. Dhanmondi, Dhaka"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-1">Availability</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.availability.map((a, dayIdx) => (
                  <div key={a.day} className="flex items-center gap-2 bg-white rounded p-2 border border-green-100">
                    <span className="w-20 text-gray-900 font-medium">{a.day}</span>
                    <select
                      value={a.type}
                      onChange={e => handleAvailabilityChange(idx, dayIdx, "type", e.target.value)}
                      className="px-2 py-1 border border-gray-300 rounded text-gray-900 text-xs"
                    >
                      <option value="alwaysFree">Always Free</option>
                      <option value="timeFrame">Time Frame</option>
                      <option value="notAvailable">Not Available</option>
                    </select>
                    {a.type === "timeFrame" && (
                      <>
                        <input
                          type="time"
                          value={a.start}
                          onChange={e => handleAvailabilityChange(idx, dayIdx, "start", e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded text-gray-900"
                        />
                        <span className="text-gray-700">to</span>
                        <input
                          type="time"
                          value={a.end}
                          onChange={e => handleAvailabilityChange(idx, dayIdx, "end", e.target.value)}
                          className="px-2 py-1 border border-gray-300 rounded text-gray-900"
                        />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-900 mb-1">Description</label>
              <textarea
                value={service.description}
                onChange={e => handleServiceChange(idx, "description", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
                placeholder="Short description of the service"
                rows={2}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">Status</label>
              <select
                value={service.status}
                onChange={e => handleServiceChange(idx, "status", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          {services.length > 1 && (
            <button
              type="button"
              onClick={() => removeService(idx)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xs font-bold"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={addService}
          disabled={services.length >= 5}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
        >
          Add Service
        </button>
      </div>
    </div>
  );
} 