"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaTimes } from "react-icons/fa";
import heroImg from "@/assets/HeroImg.png";
import { allCategories, categoryDetails } from "@/app/service/categoriesData";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Handle search input
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const filtered = allCategories.filter(category =>
      category.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filtered.slice(0, 8)); // Limit to 8 results
    setShowResults(true);
  };

  // Handle search result selection
  const handleResultClick = (category: string) => {
    setSearchQuery(category);
    setShowResults(false);
    // Navigate to service page with the selected category
    router.push(`/service?category=${encodeURIComponent(category)}`);
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleResultClick(searchResults[0]);
    }
  };

  return (
    <section
      className="bg-white bg-cover bg-center px-6 py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen"
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 p-6 sm:p-10 md:p-14 rounded-lg">
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left z-10">
          <p className="text-gray-600 text-xs sm:text-sm mb-2">
            Your trusted partner for all services.
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            All kinds of services <br />
            at your doorstep <br />
            anytime, anywhere
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-lg mx-auto lg:mx-0">
            We provide comprehensive solutions for all your needs - from home services 
            to professional care, connecting you with verified experts across Bangladesh.
          </p>

          {/* Search Bar */}
          <div className="mb-6 max-w-lg mx-auto lg:mx-0" ref={searchRef}>
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search for services..."
                  className="w-full px-4 py-3 pl-12 pr-12 rounded-lg border-2 border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-lg transition bg-white shadow-lg"
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
                      <div className="font-medium text-gray-900">{category}</div>
                      {categoryDetails[category] && (
                        <div className="text-sm text-gray-500 mt-1">
                          {categoryDetails[category].description.substring(0, 60)}...
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

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 max-w-xs mx-auto lg:mx-0">
            <button 
              onClick={() => router.push('/login')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium w-full sm:w-auto"
            >
              Get Start Now
            </button>
            <button 
              onClick={() => router.push('/service')}
              className="border border-gray-700 hover:border-gray-400 px-6 py-3 rounded-md text-sm font-medium text-gray-700 w-full sm:w-auto"
            >
              View all Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
