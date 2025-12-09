'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  imageBg: string;
  icon: JSX.Element;
  price: string;
  rating: number;
  reviews: number;
}

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Plumbing', 'Painting', 'Electrical', 'Carpentry', 'HVAC', 'Cleaning', 'Landscaping', 'Roofing'];

  const services: Service[] = [
    {
      id: 1,
      title: 'Plumbing Services',
      description: 'Expert plumbing services for all your needs. From repairs to installations, we handle it all with precision and care.',
      category: 'Plumbing',
      imageBg: 'from-blue-400 to-blue-600',
      price: 'Starting at $75',
      rating: 4.8,
      reviews: 1245,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Painting Services',
      description: 'Professional painting services to refresh and transform your space. Quality paints and expert application guaranteed.',
      category: 'Painting',
      imageBg: 'from-green-400 to-green-600',
      price: 'Starting at $150',
      rating: 4.9,
      reviews: 892,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Electrical Services',
      description: 'Certified electrical services for your home. Safe, reliable, and up to code. We ensure your electrical systems work perfectly.',
      category: 'Electrical',
      imageBg: 'from-yellow-400 to-yellow-600',
      price: 'Starting at $100',
      rating: 4.7,
      reviews: 1034,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Carpentry Services',
      description: 'Skilled carpenters for custom furniture, repairs, and installations. Quality craftsmanship guaranteed.',
      category: 'Carpentry',
      imageBg: 'from-amber-400 to-amber-600',
      price: 'Starting at $80',
      rating: 4.8,
      reviews: 756,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'HVAC Services',
      description: 'Heating, ventilation, and air conditioning services. Keep your home comfortable year-round.',
      category: 'HVAC',
      imageBg: 'from-cyan-400 to-cyan-600',
      price: 'Starting at $120',
      rating: 4.9,
      reviews: 623,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Cleaning Services',
      description: 'Professional cleaning services for homes and offices. Deep cleaning, regular maintenance, and move-in/out cleaning.',
      category: 'Cleaning',
      imageBg: 'from-purple-400 to-purple-600',
      price: 'Starting at $60',
      rating: 4.8,
      reviews: 1456,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'Landscaping Services',
      description: 'Transform your outdoor space with professional landscaping. Design, installation, and maintenance services.',
      category: 'Landscaping',
      imageBg: 'from-emerald-400 to-emerald-600',
      price: 'Starting at $200',
      rating: 4.7,
      reviews: 534,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 8,
      title: 'Roofing Services',
      description: 'Expert roofing repairs, installations, and maintenance. Protect your home with quality roofing solutions.',
      category: 'Roofing',
      imageBg: 'from-gray-400 to-gray-600',
      price: 'Starting at $300',
      rating: 4.6,
      reviews: 412,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 9,
      title: 'Appliance Repair',
      description: 'Fast and reliable appliance repair services. We fix all major brands and models.',
      category: 'Electrical',
      imageBg: 'from-indigo-400 to-indigo-600',
      price: 'Starting at $90',
      rating: 4.8,
      reviews: 678,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-400 to-green-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              All Services
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              Find the perfect service provider for all your home and business needs
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search for services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 rounded-xl text-gray-900 text-base sm:text-lg bg-white shadow-xl border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/40 transition-all"
                  />
                  <svg className="absolute right-5 sm:right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 capitalize ${
                    selectedCategory === category
                      ? 'bg-green-400 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-600 text-sm sm:text-base">
              Showing <span className="font-semibold text-gray-900">{filteredServices.length}</span> service{filteredServices.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`h-40 sm:h-48 bg-gradient-to-br ${service.imageBg} flex items-center justify-center text-white relative`}>
                    <div className="w-16 h-16 sm:w-20 sm:h-20">
                      {service.icon}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-semibold">{service.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {service.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-green-500 font-semibold text-base sm:text-lg">{service.price}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{service.reviews} reviews</span>
                      </div>
                    </div>
                    <Link
                      href={`/services/${service.id}`}
                      className="block w-full bg-green-400 hover:bg-green-500 text-white font-semibold px-5 sm:px-6 py-3 rounded-lg transition-colors text-center text-sm sm:text-base"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <svg className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

