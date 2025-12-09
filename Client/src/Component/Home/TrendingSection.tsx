
"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Marquee from "react-fast-marquee"; // Install with: npm install react-fast-marquee

const trending = [
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    name: "Electric & Plumbing",
  },
  {
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    name: "Painting & Renovation",
  },
  {
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    name: "Pet Care",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    name: "Security Services",
  },
  {
    img: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?auto=format&fit=crop&w=400&q=80",
    name: "Cleaning Services",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    name: "Home Appliances Repair",
  },
];

export default function TrendingSection() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
              Trending Services
            </h2>
            <p className="text-gray-700 text-sm">Most popular services right now</p>
          </div>
          <Link
            href="/service"
            className="hidden sm:flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold px-4 py-2 rounded-lg hover:bg-green-100 transition"
          >
            View All <FaArrowRight />
          </Link>
        </div>

        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover
          className="overflow-hidden"
        >
          {trending.map((item, idx) => (
            <Link
              key={idx}
              href={`/service?name=${encodeURIComponent(item.name)}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center p-4 cursor-pointer mx-3 min-w-[16rem] sm:min-w-[18rem] flex-shrink-0 border-2 border-green-100 hover:border-green-300 group"
            >
              <div className="w-full aspect-[4/3] relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={`${item.img}&w=300&q=50`}
                  alt={item.name}
                  fill
                  priority={idx < 3}
                  className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="text-center font-bold text-lg text-gray-900 group-hover:text-green-600 transition-colors">
                {item.name}
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
