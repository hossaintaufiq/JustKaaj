"use client";
import Link from "next/link";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import { useState } from "react";
import RegistrationForm from "@/Component/Auth/RegistrationForm/RegistrationForm";

export default function Registration() {
  const [activeTab, setActiveTab] = useState<"user" | "provider">("user");

  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
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
          <RegistrationForm activeTab={activeTab} />
          <p className="text-sm text-gray-600 mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-green-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
