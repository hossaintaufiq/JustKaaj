
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const bestForYou = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    name: 'House Shifting Services',
  },
  {
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    name: 'Home Cleaning',
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    name: 'Gas Stove/Burner Services',
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    name: 'Painting Services',
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    name: 'AC Repair',
  },
];

export default function BestForYouSection() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
              Best For You
            </h2>
            <p className="text-gray-700 text-sm">Handpicked services tailored to your needs</p>
          </div>
          <Link
            href="/service"
            className="hidden sm:flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold px-4 py-2 rounded-lg hover:bg-green-100 transition"
          >
            View All <FaArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {bestForYou.map((item, idx) => (
            <Link
              key={idx}
              href={`/service?name=${encodeURIComponent(item.name)}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center p-4 cursor-pointer border-2 border-green-100 hover:border-green-300 group"
            >
              <div className="w-full aspect-square relative mb-4 rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <div className="text-center font-semibold text-sm sm:text-base text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
