'use client';

import Logo from './Logo';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show search bar in header when scrolled past 100px
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          {/* Search Bar in Header - Only show on home page when scrolled */}
          {isHomePage && isScrolled && (
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search for any service..."
                  className="w-full px-4 py-2.5 rounded-lg text-gray-900 text-sm bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
                />
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 min-w-[100px] font-semibold text-sm ml-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search</span>
              </button>
            </div>
          )}
          <div className="relative">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}
