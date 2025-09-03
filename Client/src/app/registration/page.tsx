"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import { Register } from "@/service/Auth";
import { RegisterUser } from "@/types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Registration() {
  const [activeTab, setActiveTab] = useState<"user" | "provider">("user");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // watch,
  } = useForm<RegisterUser>();
  const router = useRouter();

  const onSubmit = async (data: RegisterUser) => {
    try {
      setIsLoading(true);
      console.log("Submitting registration data:", data);
      
      const res = await Register(data);
      if (res?.success) {
        toast.success(res?.message || "Registration successful!");
        reset();
        router.push("/login");
      } else {
        toast.error(res?.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error instanceof Error ? error.message : "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-6 py-12">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-lg w-full border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Create an Account
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setActiveTab("user")}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === "user"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              } transition`}
            >
              User
            </button>
            <button
              onClick={() => setActiveTab("provider")}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === "provider"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              } transition`}
            >
              Service Provider
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                {...register("fullName", { required: "Full name is required" })}
                className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-green-500`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-green-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+880 1XXX XXX XXX"
                {...register("phone", { required: "Phone number is required" })}
                className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-green-500`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Minimum 6 characters"
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-green-500`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Company Name - Only for Service Providers */}
            {activeTab === "provider" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company/Business Name
                </label>
                <input
                  type="text"
                  placeholder="Your company or business name"
                  {...register("company", { required: "Company name is required" })}
                  className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                    errors.company ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-green-500`}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>
            )}

            {/* Address Fields */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Address Information</h3>
              
              {/* Street Address */}
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="House/Flat No, Street Name"
                  {...register("address.street_address", { required: "Street address is required" })}
                  className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                    errors.address?.street_address ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-green-500`}
                />
                {errors.address?.street_address && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.address.street_address.message}
                  </p>
                )}
              </div>

              {/* City */}
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  placeholder="City name"
                  {...register("address.city", { required: "City is required" })}
                  className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                    errors.address?.city ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-green-500`}
                />
                {errors.address?.city && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.address.city.message}
                  </p>
                )}
              </div>

              {/* State */}
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State/Division
                </label>
                <input
                  type="text"
                  placeholder="State or Division name"
                  {...register("address.state", { required: "State is required" })}
                  className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                    errors.address?.state ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-green-500`}
                />
                {errors.address?.state && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.address.state.message}
                  </p>
                )}
              </div>

              {/* Postal Code */}
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <input
                  type="number"
                  placeholder="1234"
                  {...register("address.postal_code", { 
                    required: "Postal code is required",
                    valueAsNumber: true
                  })}
                  className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                    errors.address?.postal_code ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-green-500`}
                />
                {errors.address?.postal_code && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.address.postal_code.message}
                  </p>
                )}
              </div>

              {/* Latitude and Longitude - Hidden fields with default values */}
              <input type="hidden" {...register("address.latitude")} value={23.8103} />
              <input type="hidden" {...register("address.longitude")} value={90.4125} />
            </div>

            {/* Terms Agreement */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                {...register("agree", { required: "You must agree to the terms" })}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">
                I agree to the{" "}
                <Link href="/privacy-policy-terms" className="text-green-600 hover:text-green-500">
                  Privacy Policy & Terms of Use
                </Link>
              </label>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-xs mt-1">
                {errors.agree.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
            >
              {isLoading ? "Creating Account..." : `Create ${activeTab === "provider" ? "Provider" : "User"} Account`}
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-green-600 hover:text-green-500 font-medium">
                Sign in here
              </Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
