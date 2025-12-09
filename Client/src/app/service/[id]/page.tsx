"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Star, MessageSquare } from "lucide-react";
import Link from "next/link";

import { TService, TProviderService } from "@/types/service";
import { getServiceByID } from "@/service/servicesApi";
import Loading from "@/app/loading";
import Footer from "@/Component/Shared/Footer";
import Navbar from "@/Component/Shared/Navbar";
import ChatModal from "@/Component/Shared/ChatModal";
import { useUser } from "@/context/UserContext";

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const [service, setService] = useState<TService | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  // 🟢 Chat modal states
  const [showChat, setShowChat] = useState(false);
  const [selectedChatUser, setSelectedChatUser] = useState<{
    userId: string;
    fullName?: string;
  } | null>(null);

  useEffect(() => {
    async function fetchService() {
      try {
        const res = await getServiceByID(id as string);
        setService(res?.data);
      } catch (error) {
        console.error("Failed to load service", error);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchService();
  }, [id]);

  if (loading) return <Loading />;
  if (!service)
    return (
      <p className="text-center text-gray-500 mt-10 text-lg">
        Service not found.
      </p>
    );

  const providerService: TProviderService | undefined =
    service.providerServices?.[0];
  const provider = providerService?.service_provider;
  const providerDetails = provider?.user;

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left Column: Service Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900">
              {service.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 text-yellow-500">
              <Star className="w-6 h-6 fill-yellow-500" />
              <span className="text-gray-700 font-semibold">
                {service.avg_rating?.toFixed(1) ?? "0.0"} / 5
              </span>
            </div>

            {/* Categories & Area */}
            <div className="flex flex-wrap gap-2">
              {service.category?.map((cat) => (
                <span
                  key={cat.id}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                >
                  {cat.name}
                </span>
              ))}
              {service.area && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {service.area}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-lg">
              {service.description}
            </p>

            {/* Availability */}
            {service.availabilities?.length > 0 && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Weekly Availability
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {service.availabilities.map((slot, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg text-center shadow-md font-medium ${
                        slot.isAvailable
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <h3 className="text-gray-800">{slot.day}</h3>
                      <p className="mt-1 text-sm">
                        {slot.isAvailable
                          ? `${slot.startTime} - ${slot.endTime}`
                          : "Not available"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Price & Booking */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-6">
              <div>
                <span className="text-3xl font-bold text-gray-900">
                  ৳{service.price}
                </span>
                {service.is_featured && (
                  <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full font-semibold">
                    Featured
                  </span>
                )}
              </div>

              <Link href={`/checkout/${service.id}`}>
                <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition">
                  Continue to Booking
                </button>
              </Link>

              <div className="text-gray-500 text-sm">
                Secure payment, easy communication with provider.
              </div>
            </div>

            {/* Provider Info */}
            {provider && providerDetails && (
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Service Provider
                </h2>
                <div className="flex items-center gap-4">
                  <Image
                    src={providerDetails.profileImage || "/default-avatar.png"}
                    alt={providerDetails.fullName}
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-2 border-gray-200"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {providerDetails.fullName}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {providerDetails.email}
                    </p>
                    <p className="text-sm text-gray-600">
                      {providerDetails.phone}
                    </p>

                    <div className="flex items-center gap-2 mt-2 text-yellow-500">
                      <Star className="w-4 h-4 fill-yellow-500" />
                      <span className="text-gray-700 text-sm">
                        {service.avg_rating?.toFixed(1) ?? "0.0"} / 5
                      </span>
                    </div>

                    {provider.business_name && (
                      <p className="mt-2 text-gray-700 text-sm font-medium">
                        Business: {provider.business_name}
                      </p>
                    )}
                    {provider.website_link && (
                      <p className="mt-1 text-sm text-blue-600 hover:underline">
                        🌐{" "}
                        <a
                          href={provider.website_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {provider.website_link}
                        </a>
                      </p>
                    )}

                    {/* 🟢 Chat Button */}
                    <button
                      onClick={() => {
                        setSelectedChatUser({
                          userId: providerDetails.user_id,
                          fullName: providerDetails.fullName,
                        });
                        setShowChat(true);
                      }}
                      disabled={!user || user.role !== "USER"}
                      className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-xl transition
    ${
      !user || user.role !== "USER"
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-green-600 hover:bg-green-700 text-white"
    }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat with Provider
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🟢 Chat Modal */}
      {showChat && selectedChatUser && (
        <ChatModal
          showChat={showChat}
          setShowChat={setShowChat}
          selectedUser={selectedChatUser}
          setSelectedChatUser={setSelectedChatUser}
        />
      )}

      <Footer />
    </>
  );
}
