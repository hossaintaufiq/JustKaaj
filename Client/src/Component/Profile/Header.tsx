"use client";

import { myProfile } from "@/service/Auth";
import { useEffect, useState } from "react";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await myProfile();
      setData(res);
    }
    fetchData();
  }, []);
  const userData = data?.data;
  // Calculate profile completion (simple: name, email, phone, address)
  const userFields = ["fullName", "email", "phone", "address"];
  const userCompleted = userData
    ? userFields.filter(
        (field) => userData[field] && userData[field].toString().trim() !== ""
      ).length
    : 0;
  const userCompletionPercent = Math.round(
    (userCompleted / userFields.length) * 100
  );
  const memberSince = userData?.createdAt
    ? new Date(userData.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : null;

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
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center w-full md:w-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-0 sm:mr-6">
            {userData?.avatar ? userData.avatar : "👤"}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">
              {userData?.fullName}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              {userData?.role} Account
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {memberSince ? `Member since ${memberSince}` : "Member since N/A"}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:ml-4 mt-4 md:mt-0 w-full md:w-auto">
          <ProgressCircle percent={userCompletionPercent} />
          <span className="mt-2 text-xs text-gray-500">Profile Completion</span>
        </div>
      </div>
    </>
  );
};

export default Header;
