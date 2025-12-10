'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface Booking {
  _id: string;
  bookingId: string;
  userId: string;
  providerId: string;
  providerName: string;
  providerEmail: string;
  serviceCategory: string;
  serviceDescription?: string;
  bookingDate: string;
  timeSlot: string;
  notes?: string;
  estimatedPrice?: number;
  status: 'pending' | 'accepted' | 'rejected' | 'completed' | 'cancelled';
  createdAt: string;
  acceptedAt?: string;
  rejectedAt?: string;
  rejectionReason?: string;
}

export default function MyBookingsPage() {
  const router = useRouter();
  const { user, loading: authLoading, getIdToken } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/signin');
      return;
    }

    if (user) {
      fetchBookings();
    }
  }, [user, authLoading, router]);

  const fetchBookings = async () => {
    try {
      const token = await getIdToken();
      if (!token) {
        router.push('/signin');
        return;
      }

      const response = await fetch(`${API_URL}/api/bookings/my-bookings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch bookings');
      }

      setBookings(data.bookings || []);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load bookings';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
  };

  if (authLoading || loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-gray-600">Loading your bookings...</div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">My Bookings</h1>
            <p className="text-gray-600">View and manage your service bookings</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {bookings.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <p className="text-gray-600 text-lg mb-4">You haven't made any bookings yet.</p>
              <button
                onClick={() => router.push('/services')}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
              >
                Browse Services
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {booking.providerName}
                          </h3>
                          <p className="text-sm text-gray-600">{booking.providerEmail}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Service Category</p>
                          <p className="text-base text-gray-900 capitalize">
                            {getCategoryLabel(booking.serviceCategory)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Booking Date</p>
                          <p className="text-base text-gray-900">
                            {new Date(booking.bookingDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Time Slot</p>
                          <p className="text-base text-gray-900">{booking.timeSlot}</p>
                        </div>
                        {booking.estimatedPrice && (
                          <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Estimated Price</p>
                            <p className="text-base text-gray-900 font-semibold">${booking.estimatedPrice}</p>
                          </div>
                        )}
                      </div>

                      {booking.notes && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-500 mb-1">Your Notes</p>
                          <p className="text-base text-gray-700 bg-gray-50 p-3 rounded-lg">{booking.notes}</p>
                        </div>
                      )}

                      {booking.rejectionReason && booking.status === 'rejected' && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-red-600 mb-1">Rejection Reason</p>
                          <p className="text-base text-red-700 bg-red-50 p-3 rounded-lg">{booking.rejectionReason}</p>
                        </div>
                      )}

                      <div className="text-sm text-gray-500">
                        Booked on {new Date(booking.createdAt).toLocaleString()}
                        {booking.acceptedAt && (
                          <span className="ml-4 text-green-600">
                            Accepted on {new Date(booking.acceptedAt).toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {booking.status === 'accepted' && (
                      <div className="flex flex-col gap-3 sm:min-w-[150px]">
                        <a
                          href={`mailto:${booking.providerEmail}`}
                          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Contact
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

