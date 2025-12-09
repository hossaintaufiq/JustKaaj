"use client";
import Loading from "@/app/loading";
import ServiceCard from "@/Component/Service/ServiceCard";
import Footer from "@/Component/Shared/Footer";
import Navbar from "@/Component/Shared/Navbar";
import { getMyservices } from "@/service/servicesApi";
import { TService } from "@/types/service";
import React, { useEffect, useState } from "react";

const MyService = () => {
  const [services, setServices] = useState<TService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await getMyservices();
        setServices(res?.data || []);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Failed to load services.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10 text-lg">{error}</div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-2 text-center">
            My Services
          </h1>
          {services.length === 0 && (
            <div className="text-center text-gray-600 py-10 text-lg">
              No services found.
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyService;
