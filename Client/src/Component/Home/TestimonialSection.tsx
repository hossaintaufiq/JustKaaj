"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    name: "Robert Fox",
    role: "Business Man",
    image: "/testimonials/robert.jpg",
    quote:
      "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
  },
  {
    name: "Robert Fox",
    role: "Business Man",
    image: "/testimonials/robert.jpg",
    quote:
      "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
  },
  {
    name: "Robert Fox",
    role: "Business Man",
    image: "/testimonials/robert.jpg",
    quote:
      "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
  },
  {
    name: "Robert Fox",
    role: "Business Man",
    image: "/testimonials/robert.jpg",
    quote:
      "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
  },
  {
    name: "Robert Fox",
    role: "Business Man",
    image: "/testimonials/robert.jpg",
    quote:
      "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
  },
  {
    name: "Robert Fox",
    role: "Business Man",
    image: "/testimonials/robert.jpg",
    quote:
      "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
  },
  // Add more testimonials here
];

export default function TestimonialSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side Content */}
        <div className="max-w-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Feedback About Their <br /> Experience With Us
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Read testimonials from our satisfied clients. See how our cleaning
            services have made a difference in their lives and homes
          </p>
          <div className="flex gap-3">
            <div className="testimonial-button-prev w-10 h-10 flex items-center justify-center border border-green-500 text-green-500 rounded-md hover:bg-green-600 hover:text-white cursor-pointer transition">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="testimonial-button-next w-10 h-10 flex items-center justify-center border border-green-500 text-green-500 rounded-md hover:bg-green-600 hover:text-white cursor-pointer transition">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side Swiper */}
        <div className="w-full max-w-xl">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".testimonial-button-next",
              prevEl: ".testimonial-button-prev",
            }}
            slidesPerView={1}
            spaceBetween={20}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl border-4 border-green-500 p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-24 h-24 relative flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                      <FaQuoteRight className="text-green-500 text-3xl" />
                    </div>
                    <div className="flex gap-1 text-yellow-500 text-sm mt-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <FaStar key={i} />
                        ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{item.quote}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
