// components/ServicesSection.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

// Dummy data (replace with your actual image paths)
const services = [
  {
    title: "Office Cleaning",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: "/services/office.jpg",
  },
  {
    title: "Spring Cleaning",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: "/services/spring.jpg",
  },
  {
    title: "House Cleaning",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: "/services/house.jpg",
  },
  {
    title: "Deep Cleaning",
    description:
      "Ideal for seasonal cleanups or moving in/out, this service ensures every nook and cranny is spotless and sanitized.",
    image: "/services/deep.jpg",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Professional-grade carpet cleaning to remove stains, odors, and allergens, extending your carpet's life and freshness.",
    image: "/services/carpet.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center md:text-left">
            We Always Provide The Best Service
          </h2>
          <p className="text-gray-600 mt-4 md:mt-0 max-w-md text-center md:text-left">
            While we can customize your cleaning plan to suit your needs, most
            clients schedule regular cleaning services:
          </p>
        </div>

        <hr className="mb-6 border-gray-200" />

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: null,
          }}
          allowTouchMove={true}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="w-full h-60 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <button className="px-5 py-2 rounded-md text-sm font-medium border border-gray-300 text-gray-700 hover:bg-green-500 hover:text-white transition-colors duration-300">
                    Book Now ↗
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Right Side Nav Button */}
          <div className="custom-swiper-next text-black absolute top-[calc(50%-20px)] right-2 transform -translate-y-[20px] z-10 w-9 h-9 rounded-full bg-white border border-green-500 hover:bg-green-500 hover:text-white flex items-center justify-center shadow-md transition-colors duration-300 cursor-pointer">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Swiper>

        {/* Hide Left Button if auto-rendered */}
        <style>{`.swiper-button-prev { display: none !important; }`}</style>
      </div>
    </section>
  );
}
