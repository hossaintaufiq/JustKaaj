"use client";

import { useEffect, useState } from "react";
import ServiceCard from "@/Component/Service/ServiceCard";
import { getAllservices } from "@/service/servicesApi";
import { TService } from "@/types/service";
import Loading from "../loading";
import { FaSearch } from "react-icons/fa";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";

const ServicePage = () => {
  const [search, setSearch] = useState("");
  const [services, setServices] = useState<TService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await getAllservices();
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
            All Services
          </h1>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Browse all our service categories and discover top providers for
            each.
          </p>
          {/* Search Bar */}
          <form
            className="flex justify-center mb-8"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex w-full max-w-md">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search services..."
                className="flex-1 px-4 py-3 rounded-l-lg border-2 border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-lg text-black transition bg-white shadow-sm"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-r-lg font-bold text-lg flex items-center justify-center transition"
                aria-label="Search"
              >
                <FaSearch className="w-5 h-5" />
              </button>
            </div>
          </form>
          <div>
            {services.length === 0 ? (
              <div className="text-center text-gray-600 py-10 text-lg">
                No services found.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;
