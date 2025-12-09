"use client";
import { myProfile } from "@/service/Auth";
import { TUser } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const OverView = () => {
  const [userData, setData] = useState<TUser | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await myProfile();
      setData(res.data);
    }
    fetchData();
  }, []);
  const memberSince = userData?.createdAt
    ? new Date(userData.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : null;
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        User Overview
      </h2>
      <div className="rounded-lg p-4 sm:p-6 max-w-2xl">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl mr-4">
            {userData?.profileImage ? (
              <Image
                width={100}
                height={100}
                src={userData.profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="text-lg">👤</span>
            )}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {userData?.fullName}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">User Account</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {memberSince ? `Member since ${memberSince}` : "Member since N/A"}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="block text-xs text-gray-500">Email</span>
            <span className="block text-base text-gray-900">
              {userData?.email}
            </span>
          </div>
          <div>
            <span className="block text-xs text-gray-500">Phone</span>
            <span className="block text-base text-gray-900">
              {userData?.phone}
            </span>
          </div>
          <div className="md:col-span-2">
            <span className="block text-xs font-medium text-gray-500 mb-1">
              Address
            </span>
            <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500">
                    Street
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {userData?.address?.street_address || "N/A"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500">
                    City
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {userData?.address?.city || "N/A"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500">
                    State
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {userData?.address?.state || "N/A"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500">
                    Postal Code
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {userData?.address?.postal_code || "N/A"}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverView;
