"use client";
import HeroSection from "@/Component/Home/HeroSection";
import TestimonialSection from "@/Component/Home/TestimonialSection";
import Footer from "@/Component/Shared/Footer";
import Navbar from "@/Component/Shared/Navbar";
import BestForYouSection from "@/Component/Home/BestForYouSection";
import TrendingSection from "@/Component/Home/TrendingSection";
import FranchiseSection from "@/Component/Home/FranchiseSection";
import HowItWorksSection from "@/Component/Home/HowItWorksSection";
import { useState } from "react";
import { MapPin } from "lucide-react";

export default function Home() {
  const locations: { [key: string]: string } = {
    "Basundhara R/A": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902930542826!2d90.42332591536382!3d23.81032709235524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d13ab3d9fb%3A0x1234567890abcdef!2sBashundhara%20R/A!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd",
    "Uttora": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.167057947812!2d90.39865011536393!3d23.87505139225471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c58a0c3c09b7%3A0xabcdef1234567890!2sUttara!5e0!3m2!1sen!2sbd!4v1680000000001!5m2!1sen!2sbd",
    "Gulshan": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.113270681906!2d90.41629131536387!3d23.79249679227576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ab3f2e123f%3A0x9876543210abcdef!2sGulshan!5e0!3m2!1sen!2sbd!4v1680000000002!5m2!1sen!2sbd",
    "Banani": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.030070415891!2d90.40471331536388!3d23.79284439227569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bcd7c9e9f5%3A0xabcdef9876543210!2sBanani!5e0!3m2!1sen!2sbd!4v1680000000003!5m2!1sen!2sbd",
    "Badda": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.050301625662!2d90.42688831536384!3d23.780240792278747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abc8f1234%3A0xfedcba0987654321!2sBadda!5e0!3m2!1sen!2sbd!4v1680000000004!5m2!1sen!2sbd",
    "Dhanmondi": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.503123456789!2d90.37321331536385!3d23.74567929228563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abc8f5678%3A0x1234567890fedcba!2sDhanmondi!5e0!3m2!1sen!2sbd!4v1680000000005!5m2!1sen!2sbd",
    "Mirpur": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.712345678901!2d90.35321331536382!3d23.822112392268123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abc8f9abc%3A0xabcdefabcdefabcd!2sMirpur!5e0!3m2!1sen!2sbd!4v1680000000006!5m2!1sen!2sbd",
  };

  const [mapUrl, setMapUrl] = useState(locations["Basundhara R/A"]);
  const [selectedLocation, setSelectedLocation] = useState("Basundhara R/A");

  return (
    <div className="min-h-screen bg-green-50/80">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Trending Services */}
      <section className="py-8">
        <TrendingSection />
      </section>

      {/* Best For You */}
      <section className="py-8">
        <BestForYouSection />
      </section>

      {/* How It Works */}
      <section className="py-8">
        <HowItWorksSection />
      </section>

      {/* Franchise Section */}
      <section className="py-8">
        <FranchiseSection />
      </section>

      {/* Testimonials */}
      <section className="py-8">
        <TestimonialSection />
      </section>

      {/* Location Section - Modern Redesign */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-200 mb-3">
              <MapPin className="w-7 h-7 text-green-700" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Always at your service,{" "}
              <span className="text-green-700">right where you are</span>
            </h2>
            <p className="text-base text-gray-700 max-w-2xl mx-auto">
              We provide quality home services across Bangladesh. Our skilled professionals are ready to serve you in multiple locations throughout the country.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Location List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Select Your Location
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.keys(locations).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setMapUrl(locations[loc]);
                      setSelectedLocation(loc);
                    }}
                    className={`px-5 py-3 rounded-xl text-left transition-all duration-200 border-2 ${
                      selectedLocation === loc
                        ? "border-green-600 bg-green-200 text-green-900 shadow-lg"
                        : "border-green-200 bg-white text-gray-700 hover:border-green-400 hover:bg-green-50 shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin
                        className={`w-5 h-5 ${
                          selectedLocation === loc
                            ? "text-green-600"
                            : "text-gray-400"
                        }`}
                      />
                      <span className="font-medium">{loc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Google Map */}
            <div className="w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border-2 border-green-200 bg-white">
              <iframe
                title="Service Locations Map"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}