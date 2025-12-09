"use client";
import {
  myProfile,
  updateProfileImg,
  uploadToCloudinary,
} from "@/service/Auth";
import { TUser } from "@/types";
import ImageUploader from "@/ui/ImageUploader";
import ImagePreviewer from "@/ui/ImageUploader/ImagePreviewer";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Setting = () => {
  const [data, setData] = useState<TUser | null>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // fetch profile
  const fetchData = async () => {
    try {
      const res = await myProfile();
      setData(res.data);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpload = async () => {
    if (!imageFiles.length) return;

    try {
      setUploading(true);
      const uploadedUrl = await uploadToCloudinary(imageFiles[0]);
      await updateProfileImg(uploadedUrl);
      await fetchData(); // refresh profile with new image
      setImageFiles([]);
      setImagePreview([]);
      setIsUpdating(false);
    } catch (error) {
      console.error("Cloudinary upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleCancelUpdate = () => {
    setImageFiles([]);
    setImagePreview([]);
    setIsUpdating(false);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Account Settings
      </h2>
      <div className="space-y-6">
        {/* ---- Profile Image Upload ---- */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Profile Image
          </h3>

          <div className="flex flex-col items-center gap-4">
            {/* If profile image exists and not updating */}
            {data?.profileImage && !isUpdating && (
              <div className="flex flex-col items-center">
                <Image
                  src={data.profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover shadow-md"
                  width={128}
                  height={128}
                />
                <button
                  onClick={() => setIsUpdating(true)}
                  className="mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm font-medium transition-colors"
                >
                  Update Profile Image
                </button>
              </div>
            )}

            {/* Show uploader if no profile image or in update mode */}
            {(!data?.profileImage || isUpdating) && (
              <>
                {imageFiles.length === 0 && (
                  <ImageUploader
                    label="Upload Profile Photo"
                    setImageFiles={setImageFiles}
                    setImagePreview={setImagePreview}
                  />
                )}

                <ImagePreviewer
                  setImageFiles={setImageFiles}
                  imagePreview={imagePreview}
                  setImagePreview={setImagePreview}
                />

                <div className="flex gap-2 mt-2">
                  {imageFiles.length > 0 && (
                    <button
                      onClick={handleUpload}
                      disabled={uploading}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {uploading ? "Uploading..." : "Upload"}
                    </button>
                  )}

                  {/* Show Cancel button only if user ALREADY has a profile image */}
                  {data?.profileImage && (
                    <button
                      onClick={handleCancelUpdate}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* ---- Change Password ---- */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Change Password
          </h3>
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

        {/* ---- Notifications ---- */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Notification Preferences
          </h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                defaultChecked
              />
              <span className="ml-2 text-sm text-gray-700">
                Email notifications
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                defaultChecked
              />
              <span className="ml-2 text-sm text-gray-700">
                SMS notifications
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                Marketing emails
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
