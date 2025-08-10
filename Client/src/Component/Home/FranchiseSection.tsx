// 'use client';
// import { useState } from 'react';

// const images = [
//   'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
//   'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
//   'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
// ];

// export default function FranchiseSection() {
//   const [current, setCurrent] = useState(0);
//   const prev = () => setCurrent((current - 1 + images.length) % images.length);
//   const next = () => setCurrent((current + 1) % images.length);

//   return (
//     <section className="py-10 bg-white">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-10">
//         {/* Left: Text */}
//         <div className="flex-1 min-w-[250px] w-full md:w-auto mb-8 md:mb-0">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-2 leading-tight text-center md:text-left">
//             Make your business online with us
//           </h2>
//           <p className="text-gray-600 text-base sm:text-lg mb-8 mt-4 text-center md:text-left">
//             Develop your own successful business by investing in a proven online platform that takes all risks out and provides full support. A business of your own, but not on your own.
//           </p>
//           <div className="flex justify-center md:justify-start">
//             <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow transition w-full max-w-xs">
//               Get Started
//             </button>
//           </div>
//         </div>
//         {/* Right: Carousel */}
//         <div className="flex-1 flex flex-col items-center w-full md:w-auto">
//           <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
//             <img
//               src={images[current]}
//               alt="Franchise"
//               className="w-full h-full object-cover rounded-2xl"
//             />
//             {/* Arrows */}
//             <button
//               onClick={prev}
//               className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
//               aria-label="Previous"
//             >
//               <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
//             </button>
//             <button
//               onClick={next}
//               className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
//               aria-label="Next"
//             >
//               <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
//             </button>
//           </div>
//           {/* Dots */}
//           <div className="flex gap-2 mt-4 justify-center">
//             {images.map((_, idx) => (
//               <span
//                 key={idx}
//                 className={`w-3 h-3 rounded-full ${idx === current ? 'bg-green-500' : 'bg-gray-300'} inline-block`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// } 

// new code 
'use client';
import { useState } from 'react';
import Link from 'next/link';

const images = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
];

export default function FranchiseSection() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-10">
        {/* Left: Text */}
        <div className="flex-1 min-w-[250px] w-full md:w-auto mb-8 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-2 leading-tight text-center md:text-left">
            Make your business online with us
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 mt-4 text-center md:text-left">
            Develop your own successful business by investing in a proven online platform that takes all risks out and provides full support. A business of your own, but not on your own.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/registration"
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow transition w-full max-w-xs text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Right: Carousel */}
        <div className="flex-1 flex flex-col items-center w-full md:w-auto">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={images[current]}
              alt="Franchise"
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition"
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          {/* Dots */}
          <div className="flex gap-2 mt-4 justify-center">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full ${idx === current ? 'bg-green-500' : 'bg-gray-300'} inline-block`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
