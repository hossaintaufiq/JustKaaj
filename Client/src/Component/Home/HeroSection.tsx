

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
    <section className="relative bg-green-50/90 min-h-[85vh] flex items-center overflow-hidden py-8">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2310b981' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-200 text-green-800 rounded-full text-sm font-medium mb-5">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            Your trusted service marketplace
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
            All kinds of services{" "}
            <span className="text-green-700">at your doorstep</span>
            <br />
            anytime, anywhere
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive solutions for all your needs - from home
            services to professional care, connecting you with verified experts
            across Bangladesh.
          </p>

          {/* Search Bar - Modern Design */}
          <div className="mb-8 max-w-2xl mx-auto w-full" ref={searchRef}>
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10">
                  <FaSearch className="text-gray-400 w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search for services... (e.g., cleaning, plumbing, electric)"
                  className="w-full px-6 py-4 pl-14 pr-14 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none text-base sm:text-lg transition-all bg-white shadow-lg hover:shadow-xl"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSearchResults([]);
                      setShowResults(false);
                    }}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition p-1"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-100 rounded-2xl shadow-2xl z-50 max-h-80 overflow-y-auto">
                  {searchResults.map((category, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleResultClick(category)}
                      className="w-full px-6 py-4 text-left hover:bg-green-50 border-b border-gray-100 last:border-b-0 transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                    >
                      <div className="font-semibold text-gray-900 text-base">
                        {category}
                      </div>
                      {categoryDetails[category] && (
                        <div className="text-sm text-gray-500 mt-1">
                          {categoryDetails[category].description.substring(0, 70)}
                          ...
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* No Results */}
              {showResults && searchQuery && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-100 rounded-2xl shadow-2xl z-50">
                  <div className="px-6 py-4 text-gray-500 text-center">
                    No services found for &quot;{searchQuery}&quot;
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => router.push("/login")}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Get Started Now
            </button>
            <button
              onClick={() => router.push("/service")}
              className="px-8 py-4 bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Browse All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
