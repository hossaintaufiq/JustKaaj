"use client";

import { TUser } from "@/types";
import { useState } from "react";

type EditProfileProps = {
  providerData: TUser;
};

const EditProfile = ({ providerData }: EditProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Registration ID
          </label>
          <input
            type="text"
            value={providerData?.service_provider?.id}
            disabled
            className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-50 text-gray-900"
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            defaultValue={providerData?.fullName}
            disabled={!isEditing}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
              isEditing
                ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                : "border-gray-200 bg-gray-50"
            }`}
          />
        </div>

        {/* Business Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Name
          </label>
          <input
            type="text"
            defaultValue={providerData?.service_provider?.business_name}
            disabled={!isEditing}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
              isEditing
                ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                : "border-gray-200 bg-gray-50"
            }`}
          />
        </div>

        {/* NID Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NID Number
          </label>
          <input
            type="text"
            defaultValue={providerData?.service_provider?.nid_number}
            disabled={!isEditing}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
              isEditing
                ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                : "border-gray-200 bg-gray-50"
            }`}
          />
        </div>

        {/* Business License */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business License
          </label>
          <input
            type="text"
            defaultValue={providerData?.service_provider?.business_license}
            disabled={!isEditing}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
              isEditing
                ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                : "border-gray-200 bg-gray-50"
            }`}
          />
        </div>

        {/* Govt ID or TIN */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Govt ID or TIN
          </label>
          <input
            type="text"
            defaultValue={providerData?.service_provider?.govt_id_or_tin}
            disabled={!isEditing}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
              isEditing
                ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                : "border-gray-200 bg-gray-50"
            }`}
          />
        </div>

        {/* Facebook Profile */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Facebook Profile
          </label>
          <input
            type="text"
            defaultValue={providerData?.service_provider?.facebook_profile}
            disabled={!isEditing}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
              isEditing
                ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                : "border-gray-200 bg-gray-50"
            }`}
          />
        </div>

        {/* Website Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Website Link
          </label>
          <input
            type="text"
            defaultValue={providerData?.service_provider?.website_link}
            disabled={!isEditing}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
              isEditing
                ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                : "border-gray-200 bg-gray-50"
            }`}
          />
        </div>

        {/* Area Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Area Name
          </label>
          <input
            type="text"
            defaultValue={providerData?.address.area_name}
            disabled={!isEditing}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
              isEditing
                ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                : "border-gray-200 bg-gray-50"
            }`}
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Postal Code
          </label>
          <input
            type="text"
            defaultValue={providerData?.address.postal_code}
            disabled={!isEditing}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
              isEditing
                ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                : "border-gray-200 bg-gray-50"
            }`}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            defaultValue={providerData?.phone}
            disabled={!isEditing}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
              isEditing
                ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                : "border-gray-200 bg-gray-50"
            }`}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <input
            type="text"
            defaultValue={providerData?.service_provider?.category}
            disabled={!isEditing}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
              isEditing
                ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                : "border-gray-200 bg-gray-50"
            }`}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            defaultValue={providerData?.email}
            disabled={!isEditing}
            className={`w-full px-3 py-2 border rounded-md text-gray-900 ${
              isEditing
                ? "border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                : "border-gray-200 bg-gray-50"
            }`}
          />
        </div>

        {/* Status (read-only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <input
            type="text"
            value={providerData?.service_provider?.status}
            disabled
            className="w-full px-3 py-2 border rounded-md border-gray-200 bg-gray-50 text-gray-900"
          />
        </div>

        {/* Submitted At */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Submitted At
          </label>
          <span className="block text-base text-gray-900">
            {providerData?.service_provider?.submitted_at
              ? new Date(
                  providerData.service_provider.submitted_at
                ).toLocaleString()
              : "-"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
