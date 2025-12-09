"use client";
import { useState } from "react";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import Header from "@/Component/Profile/Header";
import OverView from "@/Component/Profile/OverView";
import Profile from "@/Component/Profile/Profile";
import Setting from "@/Component/Profile/Setting";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <Header />
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
              {activeTab === "overview" && <OverView />}
              {/* profiel tab */}
              {activeTab === "profile" && <Profile />}
              {/* setting tab */}
              {activeTab === "settings" && <Setting />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
