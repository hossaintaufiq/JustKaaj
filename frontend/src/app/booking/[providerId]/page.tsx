'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface Provider {
  _id: string;
  userId: string;
  userEmail: string;
  businessName: string;
  serviceCategory: string;
  yearsOfExperience: number;
  phoneNumber: string;
  city: string;
  state: string;
  address: string;
  businessDescription?: string;
  hourlyRate?: number;
  availability?: string[];
  specialties?: string[];
  certifications?: string[];
}

const timeSlots = [
  '08:00 AM - 10:00 AM',
  '10:00 AM - 12:00 PM',
  '12:00 PM - 02:00 PM',
  '02:00 PM - 04:00 PM',
  '04:00 PM - 06:00 PM',
  '06:00 PM - 08:00 PM',
];

export default function BookingPage() {
  const router = useRouter();
  const params = useParams();
  const providerId = params?.providerId as string;
  const { user, loading: authLoading, getIdToken } = useAuth();

  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    bookingDate: '',
    timeSlot: '',
    notes: '',
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.push(`/join?redirect=/booking/${providerId}`);
      return;
    }

    if (user && providerId) {
      checkProviderStatus();
      fetchProviderDetails();
    }
  }, [user, authLoading, providerId, router]);

  const checkProviderStatus = async () => {
    try {
      const token = await getIdToken();
      if (!token) return;

      const response = await fetch(`${API_URL}/api/providers/check`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.isProvider) {
          setError('Providers cannot book services. Please use a customer account.');
          setTimeout(() => {
            router.push('/services');
          }, 2000);
          return;
        }
      }
    } catch (error) {
      console.error('Error checking provider status:', error);
    }
  };

  const fetchProviderDetails = async () => {
    try {
      const response = await fetch(`${API_URL}/api/providers/list`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch provider details');
      }

      const providerData = data.providers.find(
        (p: Provider) => p.userId === providerId
      );

      if (!providerData) {
        throw new Error('Provider not found');
      }

      setProvider(providerData);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load provider details';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted!', formData);
    setError('');
    setSubmitting(true);

    if (!formData.bookingDate || !formData.timeSlot) {
      setError('Please select a date and time slot');
      setSubmitting(false);
      return;
    }

    if (!provider) {
      setError('Provider information is missing. Please refresh the page.');
      setSubmitting(false);
      return;
    }

    try {
      console.log('Getting authentication token...');
      const token = await getIdToken();
      if (!token) {
        throw new Error('Authentication required. Please sign in again.');
      }
      console.log('Token obtained successfully');

      const bookingData = {
        providerId,
        serviceCategory: provider?.serviceCategory || '',
        serviceDescription: provider?.businessDescription || '',
        bookingDate: formData.bookingDate,
        timeSlot: formData.timeSlot,
        notes: formData.notes,
        estimatedPrice: provider?.hourlyRate ? provider.hourlyRate * 2 : undefined, // Assuming 2 hours default
      };

      console.log('Submitting booking:', bookingData);
      console.log('API URL:', `${API_URL}/api/bookings`);
      console.log('Token available:', !!token);
      
      const response = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }
      
      console.log('Booking response data:', data);

      if (!response.ok) {
        console.error('Booking creation failed:', data);
        const errorMsg = data.message || data.error || `Failed to create booking (Status: ${response.status})`;
        throw new Error(errorMsg);
      }

      // Success - show professional success message
      setSuccess(true);
      setSuccessMessage('Booking request submitted successfully! The provider will be notified.');
      setError('');
      
      // Clear form
      setFormData({
        bookingDate: '',
        timeSlot: '',
        notes: '',
      });

      // Redirect to bookings page after 2 seconds
      setTimeout(() => {
        router.push('/my-bookings');
      }, 2000);
    } catch (err: unknown) {
      console.error('Booking submission error:', err);
      let errorMessage = 'Failed to create booking';
      
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      }
      
      console.error('Setting error:', errorMessage);
      setError(errorMessage);
      setSuccess(false);
    } finally {
      setSubmitting(false);
    }
  };

  const getCategoryLabel = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (authLoading || loading) {
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

  if (!provider) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error || 'Provider not found'}</p>
            <button
              onClick={() => router.push('/services')}
              className="text-green-500 hover:text-green-600 font-medium"
            >
              Back to Services
            </button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Provider Header */}
            <div className="bg-gradient-to-r from-green-400 to-green-600 px-6 sm:px-8 py-8 text-white">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">Book Service</h1>
              <p className="text-green-100 text-lg">Book a service with {provider.businessName}</p>
            </div>

            <div className="p-6 sm:p-8">
              {/* Provider Details */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Provider Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Business Name</p>
                    <p className="text-base text-gray-900 font-semibold">{provider.businessName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Service Category</p>
                    <p className="text-base text-gray-900 capitalize">{getCategoryLabel(provider.serviceCategory)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Experience</p>
                    <p className="text-base text-gray-900">{provider.yearsOfExperience} years</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Location</p>
                    <p className="text-base text-gray-900">{provider.city}, {provider.state}</p>
                  </div>
                  {provider.hourlyRate && (
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Hourly Rate</p>
                      <p className="text-base text-gray-900 font-semibold">${provider.hourlyRate}/hr</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Contact</p>
                    <a
                      href={`tel:${provider.phoneNumber}`}
                      className="text-base text-green-600 hover:text-green-700 font-medium"
                    >
                      {provider.phoneNumber}
                    </a>
                  </div>
                </div>

                {provider.businessDescription && (
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-500 mb-2">Description</p>
                    <p className="text-base text-gray-700">{provider.businessDescription}</p>
                  </div>
                )}

                {provider.specialties && provider.specialties.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-500 mb-2">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {provider.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit}>
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3 flex-1">
                        <h3 className="text-sm font-medium text-green-800">Booking Request Submitted!</h3>
                        <div className="mt-2 text-sm text-green-700">
                          <p>{successMessage}</p>
                          <p className="mt-1 text-xs text-green-600">Redirecting to your bookings...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Error</h3>
                        <div className="mt-2 text-sm text-red-700">
                          <p>{error}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="bookingDate"
                      name="bookingDate"
                      value={formData.bookingDate}
                      onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
                      min={getMinDate()}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-2">
                      Select Time Slot <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={4}
                      placeholder="Any special requirements or details..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>

                  {provider.hourlyRate && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-gray-600">
                        Estimated cost for 2 hours: <span className="font-semibold text-gray-900">${provider.hourlyRate * 2}</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Final price may vary based on actual work duration</p>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => router.back()}
                      className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting || !formData.bookingDate || !formData.timeSlot}
                      className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={(e) => {
                        console.log('Submit button clicked');
                        if (!formData.bookingDate || !formData.timeSlot) {
                          e.preventDefault();
                          setError('Please select a date and time slot');
                        }
                      }}
                    >
                      {submitting ? 'Submitting...' : 'Confirm Booking'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

