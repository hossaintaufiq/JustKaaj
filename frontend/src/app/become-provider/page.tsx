'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

function BecomeProviderContent() {
  const { user, loading, getIdToken } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);

  // Show form automatically if user comes back from login and is authenticated
  useEffect(() => {
    if (!loading && user && searchParams.get('apply') === 'true') {
      setShowForm(true);
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [user, loading, searchParams]);
  const [formData, setFormData] = useState({
    businessName: '',
    serviceCategory: '',
    yearsOfExperience: '',
    businessLicense: '',
    insuranceProvider: '',
    insurancePolicyNumber: '',
    portfolioWebsite: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    reference1Name: '',
    reference1Contact: '',
    reference2Name: '',
    reference2Contact: '',
    additionalInfo: '',
    acceptTerms: false,
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Apply Now button click
  const handleApplyNow = () => {
    if (!user) {
      const redirectUrl = encodeURIComponent('/become-provider?apply=true');
      router.push(`/join?redirect=${redirectUrl}`);
      return;
    }
    
    setShowForm(true);
    // Scroll to form after a brief delay to ensure it's rendered
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.businessName || !formData.serviceCategory || !formData.yearsOfExperience) {
      setError('Please fill in all required fields');
      return;
    }

    if (parseInt(formData.yearsOfExperience) < 2) {
      setError('You must have at least 2 years of experience');
      return;
    }

    if (!formData.acceptTerms) {
      setError('Please accept the terms and conditions');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get Firebase ID token for authentication
      const token = await getIdToken();
      
      if (!token) {
        throw new Error('You must be logged in to submit an application');
      }

      // Submit to backend API
      const response = await fetch(`${API_URL}/api/providers/applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit application');
      }

      setIsSuccess(true);
      // Reset form after 3 seconds and redirect
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-gray-600">Loading...</div>
        </div>
        <Footer />
      </main>
    );
  }

  // Success message (only show if user is logged in and submitted)
  if (isSuccess && user) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
              <p className="text-gray-600 mb-4">
                Thank you for your interest in becoming a JustKaaj provider. We'll review your
                application and get back to you within 3-5 business days.
              </p>
              <p className="text-sm text-gray-500">Redirecting to homepage...</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Details Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Become a Provider
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Join our network of trusted service professionals and grow your business with JustKaaj.
              </p>
            </div>
            
            {/* Why Join Section */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 sm:p-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Why Join JustKaaj?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Large Customer Base</h3>
                    <p className="text-gray-700">Access thousands of customers actively looking for your services in your area</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-700">Work when it suits you - set your own availability and manage your bookings</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Rates</h3>
                    <p className="text-gray-700">Earn what you're worth with competitive commission rates and transparent pricing</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Support</h3>
                    <p className="text-gray-700">Get promoted to customers through our marketing campaigns and platform visibility</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Management</h3>
                    <p className="text-gray-700">User-friendly platform for managing bookings, payments, and customer communication</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Platform</h3>
                    <p className="text-gray-700">Join a trusted platform with secure payments and verified customer reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Apply Section */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                How to Apply
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete the Application Form</h3>
                    <p className="text-gray-600">Fill out our comprehensive application with your business details, experience, and credentials</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Process</h3>
                    <p className="text-gray-600">Our team will review your application within 3-5 business days and verify your credentials</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Approved</h3>
                    <p className="text-gray-600">Once approved, you'll receive access to our platform and can start receiving bookings</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Growing</h3>
                    <p className="text-gray-600">Begin accepting bookings, build your reputation, and grow your business with JustKaaj</p>
                  </div>
                </div>
              </div>

              {/* Application Requirements */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Requirements</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Valid business license and insurance documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Minimum 2 years of professional experience in your field</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Background check clearance (we'll assist with this process)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Portfolio or examples of previous work (website, photos, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>At least 2 professional references from previous clients or employers</span>
                  </li>
                </ul>
              </div>

              {/* Apply Now Button */}
              <div className="text-center">
                <button
                  onClick={handleApplyNow}
                  className="bg-green-400 hover:bg-green-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Apply Now
                </button>
                <p className="mt-4 text-sm text-gray-500">
                  {user 
                    ? 'Click the button above to start your application'
                    : 'You\'ll need to sign in first to complete the application'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Form Section */}
      {showForm && user && (
        <section ref={formRef} className="bg-gray-50 py-12 sm:py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Provider Application Form
              </h2>
              <p className="text-gray-600 text-lg">
                Complete the form below to join our network of trusted service professionals
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Information</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder="Your Business Name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceCategory" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="painting">Painting</option>
                      <option value="carpentry">Carpentry</option>
                      <option value="cleaning">Cleaning</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="hvac">HVAC</option>
                      <option value="appliance-repair">Appliance Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="yearsOfExperience"
                      name="yearsOfExperience"
                      value={formData.yearsOfExperience}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder="e.g., 5"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">Minimum 2 years required</p>
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Address</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder="123 Main St"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        placeholder="City"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        placeholder="State"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        placeholder="12345"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* License & Insurance */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">License & Insurance</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="businessLicense" className="block text-sm font-medium text-gray-700 mb-2">
                      Business License Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessLicense"
                      name="businessLicense"
                      value={formData.businessLicense}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder="Enter license number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Provider <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="insuranceProvider"
                      name="insuranceProvider"
                      value={formData.insuranceProvider}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder="Insurance company name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="insurancePolicyNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Policy Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="insurancePolicyNumber"
                      name="insurancePolicyNumber"
                      value={formData.insurancePolicyNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      placeholder="Enter policy number"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Portfolio */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Portfolio</h3>
                <div>
                  <label htmlFor="portfolioWebsite" className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio Website or LinkedIn
                  </label>
                  <input
                    type="url"
                    id="portfolioWebsite"
                    name="portfolioWebsite"
                    value={formData.portfolioWebsite}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>

              {/* References */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">References</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="reference1Name" className="block text-sm font-medium text-gray-700 mb-2">
                        Reference 1 Name
                      </label>
                      <input
                        type="text"
                        id="reference1Name"
                        name="reference1Name"
                        value={formData.reference1Name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="reference1Contact" className="block text-sm font-medium text-gray-700 mb-2">
                        Reference 1 Contact
                      </label>
                      <input
                        type="text"
                        id="reference1Contact"
                        name="reference1Contact"
                        value={formData.reference1Contact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        placeholder="Email or Phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="reference2Name" className="block text-sm font-medium text-gray-700 mb-2">
                        Reference 2 Name
                      </label>
                      <input
                        type="text"
                        id="reference2Name"
                        name="reference2Name"
                        value={formData.reference2Name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="reference2Contact" className="block text-sm font-medium text-gray-700 mb-2">
                        Reference 2 Contact
                      </label>
                      <input
                        type="text"
                        id="reference2Contact"
                        name="reference2Contact"
                        value={formData.reference2Contact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                        placeholder="Email or Phone"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Tell us more about your business, experience, or any additional information..."
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-400 border-gray-300 rounded focus:ring-green-400"
                    required
                  />
                </div>
                <label htmlFor="acceptTerms" className="ml-3 text-sm text-gray-600">
                  I confirm that all information provided is accurate and I agree to the{' '}
                  <a href="#" className="text-green-500 hover:text-green-600 font-medium">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-green-500 hover:text-green-600 font-medium">
                    Provider Agreement
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      )}

      <Footer />
    </main>
  );
}

export default function BecomeProviderPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-gray-600">Loading...</div>
        </div>
        <Footer />
      </main>
    }>
      <BecomeProviderContent />
    </Suspense>
  );
}

