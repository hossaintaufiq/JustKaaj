'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  // Common service suggestions
  const commonSuggestions = [
    'Plumbing',
    'Electrical',
    'Painting',
    'Carpentry',
    'Cleaning',
    'Landscaping',
    'HVAC',
    'Appliance Repair',
  ];

  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Hide search bar when scrolled past 100px
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter suggestions based on search query (case-insensitive)
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      const filtered = commonSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query)
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to services page with search query
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/services');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    // Redirect to services page with the selected suggestion
    router.push(`/services?search=${encodeURIComponent(suggestion)}`);
  };
  const categories = [
    { label: 'Plumbing', href: '#services' },
    { label: 'Painting', href: '#services' },
    { label: 'Electrical', href: '#services' },
    { label: 'Carpentry', href: '#services' },
    { label: 'HVAC', href: '#services' },
  ];

  const trustedBy = [
    { name: 'Meta', logo: 'M' },
    { name: 'Google', logo: 'G' },
    { name: 'NETFLIX', logo: 'N' },
    { name: 'P&G', logo: 'P&G' },
    { name: 'PayPal', logo: 'PP' },
    { name: 'Payoneer', logo: 'P' },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/Hero/HeroImg.webp"
          alt="Hero Background"
          fill
          className="object-cover hidden md:block"
          priority
          quality={90}
        />
        <Image
          src="/image/Hero/HeroImg2.webp"
          alt="Hero Background Mobile"
          fill
          className="object-cover md:hidden"
          priority
          quality={90}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-xl md:max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 md:mb-10 leading-tight">
            Our service providers
            <br />
            will take it from here
          </h1>

          {/* Search Bar - Hidden when scrolled */}
          {!isScrolled && (
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8 max-w-lg transition-opacity duration-300">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search for any service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.trim().length > 0 && setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 rounded-xl text-gray-900 text-sm sm:text-base md:text-lg bg-white shadow-xl border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-green-400/30 focus:border-green-400/40 transition-all"
                />
                <svg className="absolute right-4 sm:right-5 md:right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                
                {/* Search Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-64 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 sm:px-5 py-3 hover:bg-green-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center gap-3">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <span className="text-sm sm:text-base text-gray-700">{suggestion}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button 
                type="submit"
                className="bg-green-400 hover:bg-green-500 text-white px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 rounded-xl transition-colors flex items-center justify-center gap-2 min-w-[100px] sm:min-w-[120px] font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden sm:inline">Search</span>
              </button>
            </form>
          )}

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16 max-w-2xl">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg transition-all duration-200 flex items-center gap-2 group border border-white/20"
              >
                <span className="text-sm sm:text-base font-medium">{category.label}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>

          {/* Trusted By Section */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <p className="text-white/90 text-sm sm:text-base mb-4 md:mb-6 font-medium">Trusted by:</p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
              {trustedBy.map((company, index) => (
                <div
                  key={index}
                  className="text-white/80 hover:text-white transition-colors text-base sm:text-lg md:text-xl font-semibold"
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Play Button (Bottom Right) */}
      {/* <button className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20 group">
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button> */}
    </section>
  );
}
