'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface Provider {
  _id: string;
  userId: string;
  businessName: string;
  serviceCategory: string;
  yearsOfExperience: number;
  phoneNumber: string;
  city: string;
  state: string;
  businessDescription?: string;
  hourlyRate?: number;
  portfolioWebsite?: string;
  availability?: string[];
  specialties?: string[];
  certifications?: string[];
}

const categories = [
  { value: 'all', label: 'All Services' },
  { value: 'plumbing', label: 'Plumbing' },
  { value: 'electrical', label: 'Electrical' },
  { value: 'painting', label: 'Painting' },
  { value: 'carpentry', label: 'Carpentry' },
  { value: 'cleaning', label: 'Cleaning' },
  { value: 'landscaping', label: 'Landscaping' },
  { value: 'hvac', label: 'HVAC' },
  { value: 'appliance-repair', label: 'Appliance Repair' },
  { value: 'other', label: 'Other' },
];

// Service category images mapping
const getServiceImage = (category: string) => {
  const images: Record<string, string> = {
    plumbing: '🔧',
    electrical: '⚡',
    painting: '🎨',
    carpentry: '🪚',
    cleaning: '🧹',
    landscaping: '🌳',
    hvac: '❄️',
    'appliance-repair': '🔌',
    other: '🔨',
  };
  return images[category] || '🔨';
};

export default function ServicesPage() {
  const router = useRouter();
  const { user, loading: authLoading, getIdToken } = useAuth();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [notification, setNotification] = useState<{ type: 'error' | 'info'; message: string } | null>(null);

  useEffect(() => {
    fetchProviders();
  }, [selectedCategory]);

  // Handle search query from URL parameter (when redirected from hero search)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const searchParam = params.get('search');
      if (searchParam) {
        setSearchQuery(decodeURIComponent(searchParam));
        // Ensure suggestions don't show when loading from URL
        setShowSuggestions(false);
        setIsInputFocused(false);
        // Scroll to search results after a brief delay
        setTimeout(() => {
          const resultsSection = document.getElementById('search-results');
          if (resultsSection) {
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    }
  }, []);

  const fetchProviders = async () => {
    setLoading(true);
    setError('');
    try {
      const url =
        selectedCategory === 'all'
          ? `${API_URL}/api/providers/list`
          : `${API_URL}/api/providers/list/${selectedCategory}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch providers');
      }

      setProviders(data.providers || []);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load services';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Close suggestions on explicit search
    setShowSuggestions(false);
    // Search is handled by filtering providers
  };

  const handleBookNow = async (provider: Provider) => {
    // Check if user is logged in
    if (!user) {
      // Redirect to signup with provider info in URL
      router.push(`/join?redirect=/booking/${provider.userId}&providerName=${encodeURIComponent(provider.businessName)}`);
      return;
    }

    // Check if user is a provider (providers cannot book services)
    try {
      const token = await getIdToken();
      if (token) {
        const response = await fetch(`${API_URL}/api/providers/check`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.isProvider) {
            setNotification({
              type: 'info',
              message: 'Providers cannot book services. Please use a customer account.',
            });
            setTimeout(() => setNotification(null), 5000);
            return;
          }
        }
      }
    } catch (error) {
      console.error('Error checking provider status:', error);
    }

    // Redirect to booking page
    router.push(`/booking/${provider.userId}`);
  };

  const getCategoryLabel = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
  };

  // Generate search suggestions - only show when input is focused and user is typing
  useEffect(() => {
    if (searchQuery.trim().length > 0 && providers.length > 0 && isInputFocused) {
      const query = searchQuery.toLowerCase();
      const uniqueSuggestions = new Set<string>();
      
      providers.forEach((provider) => {
        // Business name suggestions
        if (provider.businessName.toLowerCase().includes(query)) {
          uniqueSuggestions.add(provider.businessName);
        }
        // Category suggestions
        const categoryLabel = getCategoryLabel(provider.serviceCategory).toLowerCase();
        if (categoryLabel.includes(query) || provider.serviceCategory.toLowerCase().includes(query)) {
          uniqueSuggestions.add(getCategoryLabel(provider.serviceCategory));
        }
        // Location suggestions
        if (provider.city.toLowerCase().includes(query)) {
          uniqueSuggestions.add(provider.city);
        }
        if (provider.state.toLowerCase().includes(query)) {
          uniqueSuggestions.add(provider.state);
        }
      });

      // Add category suggestions
      categories.forEach((cat) => {
        if (cat.label.toLowerCase().includes(query) || cat.value.toLowerCase().includes(query)) {
          uniqueSuggestions.add(cat.label);
        }
      });

      setSuggestions(Array.from(uniqueSuggestions).slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery, providers, isInputFocused]);

  // Filter providers based on search query (case-insensitive)
  const filteredProviders = providers.filter((provider) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      provider.businessName.toLowerCase().includes(query) ||
      provider.serviceCategory.toLowerCase().includes(query) ||
      getCategoryLabel(provider.serviceCategory).toLowerCase().includes(query) ||
      provider.city.toLowerCase().includes(query) ||
      provider.state.toLowerCase().includes(query) ||
      provider.businessDescription?.toLowerCase().includes(query)
    );
  });

  const selectedCategoryLabel =
    categories.find((c) => c.value === selectedCategory)?.label || 'All Services';

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Search Section */}
      <section className="relative bg-gradient-to-r from-green-400 to-green-600 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Find Your Perfect Service Provider
            </h1>
            <p className="text-white/90 text-lg sm:text-xl">
              Trusted professionals ready to help you
            </p>
          </div>
            
            {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                  placeholder="Search for any service or provider..."
                    value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsInputFocused(true);
                  }}
                  onFocus={() => {
                    setIsInputFocused(true);
                    if (searchQuery.trim().length > 0) {
                      setShowSuggestions(true);
                    }
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setIsInputFocused(false);
                      setShowSuggestions(false);
                    }, 200);
                  }}
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
                        onClick={() => {
                          setSearchQuery(suggestion);
                          setShowSuggestions(false);
                          setIsInputFocused(false);
                        }}
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
                className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 rounded-xl transition-colors flex items-center justify-center gap-2 min-w-[100px] sm:min-w-[120px] font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden sm:inline">Search</span>
              </button>
            </form>
            </div>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg transition-all font-medium ${
                  selectedCategory === category.value
                    ? 'bg-white text-green-600 shadow-lg'
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="search-results" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <div className="text-gray-600">Loading providers...</div>
            </div>
          ) : filteredProviders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                {searchQuery
                  ? `No providers found matching "${searchQuery}"`
                  : `No providers found for ${selectedCategoryLabel.toLowerCase()}`}
            </p>
          </div>
          ) : (
            <>
              <div className="mb-6 text-gray-600">
                Found {filteredProviders.length} provider{filteredProviders.length !== 1 ? 's' : ''}{' '}
                {searchQuery && `matching "${searchQuery}"`}
                {!searchQuery && `in ${selectedCategoryLabel}`}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProviders.map((provider) => (
                  <div
                    key={provider._id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Part 1: Service Image/Picture */}
                    <div className="relative h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <div className="text-8xl opacity-80">
                        {getServiceImage(provider.serviceCategory)}
                    </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-green-600 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                          {getCategoryLabel(provider.serviceCategory)}
                        </span>
                      </div>
                    </div>

                    {/* Part 2: Service Information */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {provider.businessName}
                      </h3>
                      
                      <div className="space-y-3 mb-4 flex-1">
                        <div className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-sm">{provider.yearsOfExperience} years experience</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-sm">
                            {provider.city}, {provider.state}
                      </span>
                        </div>

                        {provider.hourlyRate && (
                          <div className="flex items-center text-gray-600">
                            <svg
                              className="w-5 h-5 mr-2 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-sm font-semibold">${provider.hourlyRate}/hr</span>
                          </div>
                        )}

                        {provider.businessDescription && (
                          <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                            {provider.businessDescription}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Part 3: Contact Info & Book Now Button */}
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <a 
                            href={`tel:${provider.phoneNumber}`} 
                            className="text-sm hover:text-green-500 transition-colors"
                          >
                            {provider.phoneNumber}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleBookNow(provider)}
                          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          Book Now
                        </button>
                        {provider.portfolioWebsite && (
                          <a
                            href={provider.portfolioWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center justify-center"
                            title="View Portfolio"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                        </svg>
                          </a>
                        )}
                      </div>
                  </div>
                </div>
              ))}
            </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
