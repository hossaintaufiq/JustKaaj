"use client";
"use client";
import { useEffect, useState } from "react";
import { TUser } from "@/types";
import { myProfile } from "@/service/Auth";
import Image from "next/image";
import EditProfile from "@/Component/Profile/provider/EditProfile";
import Setting from "@/Component/Profile/Setting";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";

export default function ProfileForm() {
  const [activeTab, setActiveTab] = useState("overview");
  const [providerData, setProviderData] = useState<TUser | null>(null);

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
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s" }}
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

  useEffect(() => {
    async function fetchData() {
      const res = await myProfile();
      setProviderData(res.data);
    }
    fetchData();
  }, []);
  //     {
  //       id: 1,
  //       service: "Home Cleaning",
  //       status: "Active",
  //       bookings: 120,
  //       rating: 4.8,
  //     },
  //     {
  //       id: 2,
  //       service: "Office Cleaning",
  //       status: "Active",
  //       bookings: 80,
  //       rating: 4.7,
  //     },
  //     {
  //       id: 3,
  //       service: "Event Services",
  //       status: "Inactive",
  //       bookings: 15,
  //       rating: 4.5,
  //     },
  //   ];

  // Calculate completion percentage
  let completedCount = 0;

  if (providerData) {
    completedCount = (Object.keys(providerData) as Array<keyof TUser>).filter(
      (key) => {
        const value = providerData[key];
        return (
          value !== undefined &&
          value !== null &&
          value.toString().trim() !== ""
        );
      }
    ).length;
  }

  const completionPercent = providerData
    ? Math.round((completedCount / Object.keys(providerData).length) * 100)
    : 0;

  return (
    <>
      <Navbar />
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center w-full md:w-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-0 sm:mr-6">
            {providerData?.profileImage ? (
              <Image
                width={100}
                height={100}
                src={providerData.profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="text-lg">👤</span>
            )}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">
              {providerData?.service_provider?.business_name}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Service Provider
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Owner: {providerData?.fullName}
            </p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
                providerData?.service_provider?.status === "ACTIVE"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-amber-500"
              }`}
            >
              {providerData?.service_provider?.status}
            </span>
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
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Provider Overview
              </h2>
              {/* Service Details Card/List (was in Service Details tab) */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6 flex flex-col sm:flex-row items-center gap-6">
                <div>
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-2xl mb-2">
                    {providerData?.profileImage ? (
                      <Image
                        width={100}
                        height={100}
                        src={providerData.profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-lg">👤</span>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-bold text-green-700">
                      {providerData?.service_provider?.business_name}
                    </span>
                    <span className="ml-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-semibold">
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-500 text-xs font-semibold mb-1">
                    <span>★★★★☆</span>
                    <span className="text-gray-800 ml-1">4.8</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-700 mb-2">
                    <span className="bg-green-50 px-2 py-0.5 rounded">
                      {providerData?.address?.area_name}
                    </span>
                    <span className="bg-green-50 px-2 py-0.5 rounded">
                      5+ years exp
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "edit" && <EditProfile providerData={providerData!} />}

          {activeTab === "settings" && <Setting />}
        </div>
      </div>
      <Footer />
    </>
  );
}
