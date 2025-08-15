

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { FaSearch, FaTimes } from "react-icons/fa";
// import heroImg from "@/assets/HeroImg.png"; // desktop image
// import heroImg2 from "@/assets/HeroImg2.png"; // mobile image
// import { allCategories, categoryDetails } from "@/app/service/categoriesData";

// export default function HeroSection() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState<string[]>([]);
//   const [showResults, setShowResults] = useState(false);
//   const searchRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     if (query.trim() === "") {
//       setSearchResults([]);
//       setShowResults(false);
//       return;
//     }
//     const filtered = allCategories.filter((category) =>
//       category.toLowerCase().includes(query.toLowerCase())
//     );
//     setSearchResults(filtered.slice(0, 8));
//     setShowResults(true);
//   };

//   const handleResultClick = (category: string) => {
//     setSearchQuery(category);
//     setShowResults(false);
//     router.push(`/service?category=${encodeURIComponent(category)}`);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         searchRef.current &&
//         !searchRef.current.contains(event.target as Node)
//       ) {
//         setShowResults(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchResults.length > 0) {
//       handleResultClick(searchResults[0]);
//     }
//   };

//   return (
//     <section className="relative bg-white min-h-screen flex items-center">
//       {/* Mobile background */}
//       <div
//         className="absolute inset-0 bg-cover bg-no-repeat sm:hidden"
//         style={{
//           backgroundImage: `url(${heroImg2.src})`,
//           backgroundPosition: "center",
//         }}
//       ></div>

//       {/* Desktop background */}
//       <div
//         className="absolute inset-0 bg-cover bg-no-repeat hidden sm:block"
//         style={{
//           backgroundImage: `url(${heroImg.src})`,
//           backgroundPosition: "center",
//         }}
//       ></div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-20 flex flex-col items-center lg:items-start">
//         <div className="max-w-xl text-center lg:text-left">
//           <p className="text-gray-200 text-sm sm:text-base mb-3">
//             Your trusted partner for all services.
//           </p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-md">
//             All kinds of services <br />
//             at your doorstep <br />
//             anytime, anywhere
//           </h1>
//           <p className="text-gray-100 text-sm sm:text-base mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
//             We provide comprehensive solutions for all your needs - from home
//             services to professional care, connecting you with verified experts
//             across Bangladesh.
//           </p>

//           {/* Search Bar */}
//           <div className="mb-8 max-w-lg mx-auto lg:mx-0 w-full" ref={searchRef}>
//             <form onSubmit={handleSubmit} className="relative">
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => handleSearch(e.target.value)}
//                   placeholder="Search for services..."
//                   className="w-full px-4 py-3 pl-12 pr-12 rounded-lg border border-transparent focus:border-green-400 focus:ring-2 focus:ring-green-200 outline-none text-base sm:text-lg transition bg-white shadow-md"
//                 />
//                 <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 {searchQuery && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setSearchQuery("");
//                       setSearchResults([]);
//                       setShowResults(false);
//                     }}
//                     className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
//                   >
//                     <FaTimes className="w-4 h-4" />
//                   </button>
//                 )}
//               </div>

//               {/* Search Results Dropdown */}
//               {showResults && searchResults.length > 0 && (
//                 <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
//                   {searchResults.map((category, index) => (
//                     <button
//                       key={index}
//                       type="button"
//                       onClick={() => handleResultClick(category)}
//                       className="w-full px-4 py-3 text-left hover:bg-green-50 border-b border-gray-100 last:border-b-0 transition-colors"
//                     >
//                       <div className="font-medium text-gray-900">
//                         {category}
//                       </div>
//                       {categoryDetails[category] && (
//                         <div className="text-sm text-gray-500 mt-1">
//                           {categoryDetails[category].description.substring(
//                             0,
//                             60
//                           )}
//                           ...
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {/* No Results */}
//               {showResults && searchQuery && searchResults.length === 0 && (
//                 <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//                   <div className="px-4 py-3 text-gray-500">
//                     No services found for &quot;{searchQuery}&quot;
//                   </div>
//                 </div>
//               )}
//             </form>
//           </div>

//           {/* Buttons */}
//                     <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 max-w-xs mx-auto lg:mx-0">
//             <button
//               onClick={() => router.push('/login')}
//               className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium w-full sm:w-auto"
//             >
//               Get Start Now
//             </button>
//             <button
//               onClick={() => router.push('/service')}
//               className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium w-full sm:w-auto"
//             >
            
//               View all Services
//             </button>
//           </div>

          
//         </div>
//       </div>
//     </section>
//   );
// }



// new code 
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaTimes } from "react-icons/fa";
import Image from "next/image"; // ✅ for optimized image loading
import heroImg from "@/assets/HeroImg.webp"; // ✅ optimized desktop image
import heroImg2 from "@/assets/HeroImg2.webp"; // ✅ optimized mobile image
import { allCategories, categoryDetails } from "@/app/service/categoriesData";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    const filtered = allCategories.filter((category) =>
      category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered.slice(0, 8));
    setShowResults(true);
  };

  const handleResultClick = (category: string) => {
    setSearchQuery(category);
    setShowResults(false);
    router.push(`/service?category=${encodeURIComponent(category)}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0]);
    }
  };

  return (
    <section className="relative bg-white min-h-screen flex items-center">
      {/* Mobile background */}
      <div className="absolute inset-0 sm:hidden">
        <Image
          src={heroImg2}
          alt="Hero Mobile"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Desktop background */}
      <div className="absolute inset-0 hidden sm:block">
        <Image
          src={heroImg}
          alt="Hero Desktop"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-20 flex flex-col items-center lg:items-start">
        <div className="max-w-xl text-center lg:text-left">
          <p className="text-gray-200 text-sm sm:text-base mb-3">
            Your trusted partner for all services.
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-md">
            All kinds of services <br />
            at your doorstep <br />
            anytime, anywhere
          </h1>
          <p className="text-gray-100 text-sm sm:text-base mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            We provide comprehensive solutions for all your needs - from home
            services to professional care, connecting you with verified experts
            across Bangladesh.
          </p>

          {/* Search Bar */}
          <div className="mb-8 max-w-lg mx-auto lg:mx-0 w-full" ref={searchRef}>
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search for services..."
                  className="w-full px-4 py-3 pl-12 pr-12 rounded-lg border border-transparent focus:border-green-400 focus:ring-2 focus:ring-green-200 outline-none text-base sm:text-lg transition bg-white shadow-md"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSearchResults([]);
                      setShowResults(false);
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                  {searchResults.map((category, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleResultClick(category)}
                      className="w-full px-4 py-3 text-left hover:bg-green-50 border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      <div className="font-medium text-gray-900">
                        {category}
                      </div>
                      {categoryDetails[category] && (
                        <div className="text-sm text-gray-500 mt-1">
                          {categoryDetails[category].description.substring(
                            0,
                            60
                          )}
                          ...
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* No Results */}
              {showResults && searchQuery && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="px-4 py-3 text-gray-500">
                    No services found for &quot;{searchQuery}&quot;
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 max-w-xs mx-auto lg:mx-0">
            <button
              onClick={() => router.push("/login")}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium w-full sm:w-auto"
            >
              Get Start Now
            </button>
            <button
              onClick={() => router.push("/service")}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium w-full sm:w-auto"
            >
              View all Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
