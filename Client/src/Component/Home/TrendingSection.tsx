
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
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-700">
            Trending
          </h2>
          <Link
            href="/service"
            className="flex items-center gap-2 text-green-600 hover:text-green-800 font-medium text-sm px-3 py-2 rounded transition"
          >
            View All <FaArrowRight />
          </Link>
        </div>

        <Marquee
          gradient={false}
          speed={35}
          pauseOnHover
          className="overflow-hidden"
        >
          {trending.map((item, idx) => (
            <Link
              key={idx}
              href={`/service?name=${encodeURIComponent(item.name)}`}
              className="bg-green-50 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center p-3 cursor-pointer mx-2 min-w-[14rem] sm:min-w-[16rem] flex-shrink-0"
            >
              <div className="w-full aspect-[4/3] relative mb-3">
                <Image
                  src={`${item.img}&w=300&q=50`}
                  alt={item.name}
                  fill
                  priority={idx < 3}
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="mt-2 text-center font-bold text-lg text-gray-900">
                {item.name}
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
