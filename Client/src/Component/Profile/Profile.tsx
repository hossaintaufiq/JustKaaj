"use client";

import { myProfile } from "@/service/Auth";
import { TUser } from "@/types";
import { useEffect, useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState<TUser | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await myProfile();
      setData(res.data);
    }
    fetchData();
  }, []);

  const userData = data;

  // Common input classes
  const inputClasses = (isEditing: boolean) =>
    `w-full px-3 py-2 border rounded-md shadow-sm transition text-gray-900 disabled:text-gray-600 ${
      isEditing
        ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
        : "border-gray-200 bg-gray-50"
    }`;

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Personal Information
          </h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              defaultValue={userData?.fullName}
              disabled={!isEditing}
              className={inputClasses(isEditing)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              defaultValue={userData?.email}
              disabled={!isEditing}
              className={inputClasses(isEditing)}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              defaultValue={userData?.phone}
              disabled={!isEditing}
              className={inputClasses(isEditing)}
            />
          </div>

          {/* Street Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              defaultValue={userData?.address?.street_address}
              disabled={!isEditing}
              className={inputClasses(isEditing)}
            />
          </div>

          {/* Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Area
            </label>
            <input
              type="text"
              defaultValue={userData?.address?.area_name}
              disabled={!isEditing}
              className={inputClasses(isEditing)}
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              defaultValue={userData?.address?.city}
              disabled={!isEditing}
              className={inputClasses(isEditing)}
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              defaultValue={userData?.address?.state}
              disabled={!isEditing}
              className={inputClasses(isEditing)}
            />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              defaultValue={userData?.address?.postal_code}
              disabled={!isEditing}
              className={inputClasses(isEditing)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
