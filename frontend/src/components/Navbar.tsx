'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onLinkClick?: () => void;
}

export default function Navbar({ onLinkClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    onLinkClick?.();
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'All Services' },
    { href: '/become-provider', label: 'Become a Provider' },
    { href: '/signin', label: 'Sign In' },
    { href: '/join', label: 'Join' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <div className="navbar-container relative">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-4 lg:space-x-4 xl:space-x-6">
        {navLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-200 ${
                active
                  ? 'text-green-500'
                  : 'text-gray-700 hover:text-green-400'
              }`}
            >
              {link.label}
              {active && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none p-2 -mr-2 transition-transform duration-200 hover:scale-110"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg 
          className="w-6 h-6 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <nav className="md:hidden fixed top-[73px] left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50 max-h-[calc(100vh-73px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto max-w-7xl px-4 py-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        active
                          ? 'bg-green-50 text-green-500 border-l-4 border-green-500'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-green-400'
                      }`}
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}

