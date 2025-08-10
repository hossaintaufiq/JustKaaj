
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
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-700">Best For You</h2>
          <Link
            href="/service"
            className="flex items-center gap-2 text-green-600 hover:text-green-800 font-medium text-sm px-3 py-2 rounded transition"
          >
            View All <FaArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {bestForYou.map((item, idx) => (
            <Link
              key={idx}
              href={`/service?name=${encodeURIComponent(item.name)}`} // Pass service name as query
              className="bg-green-50 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center p-3 cursor-pointer"
            >
              <div className="w-full aspect-[4/3] relative mb-3">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
              <div className="mt-2 text-center font-bold text-lg text-gray-900">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
