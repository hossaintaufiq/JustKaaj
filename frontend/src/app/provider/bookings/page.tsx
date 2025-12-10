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
  userEmail: string;
  userName?: string;
  providerId: string;
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

export default function ProviderBookingsPage() {
  const router = useRouter();
  const { user, loading: authLoading, getIdToken } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('pending');

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/signin');
      return;
    }

    if (user) {
      fetchBookings();
    }
  }, [user, authLoading, router, statusFilter]);

  const fetchBookings = async () => {
    try {
      const token = await getIdToken();
      if (!token) {
        router.push('/signin');
        return;
      }

      const url = statusFilter !== 'all' 
        ? `${API_URL}/api/bookings/provider/bookings?status=${statusFilter}`
        : `${API_URL}/api/bookings/provider/bookings`;

      const response = await fetch(url, {
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

  const handleAccept = async (bookingId: string) => {
    if (!confirm('Are you sure you want to accept this booking?')) return;

    try {
      const token = await getIdToken();
      if (!token) return;

      const response = await fetch(`${API_URL}/api/bookings/${bookingId}/accept`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to accept booking');
      }

      alert('Booking accepted! The customer has been notified.');
      fetchBookings(); // Refresh list
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to accept booking';
      alert(errorMessage);
    }
  };

  const handleReject = async (bookingId: string) => {
    const rejectionReason = prompt('Please provide a reason for rejection (optional):');
    if (rejectionReason === null) return; // User cancelled

    try {
      const token = await getIdToken();
      if (!token) return;

      const response = await fetch(`${API_URL}/api/bookings/${bookingId}/reject`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rejectionReason: rejectionReason || undefined }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to reject booking');
      }

      alert('Booking rejected. The customer has been notified.');
      fetchBookings(); // Refresh list
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to reject booking';
      alert(errorMessage);
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
          <div className="text-gray-600">Loading bookings...</div>
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
            <p className="text-gray-600">Manage your service bookings</p>
          </div>

          {/* Status Filter */}
          <div className="mb-6 flex flex-wrap gap-2">
            {['all', 'pending', 'accepted', 'rejected', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  statusFilter === status
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {bookings.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <p className="text-gray-600 text-lg">
                {statusFilter === 'all' ? 'No bookings found' : `No ${statusFilter} bookings`}
              </p>
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
                            {booking.userName || booking.userEmail}
                          </h3>
                          <p className="text-sm text-gray-600">{booking.userEmail}</p>
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
                          <p className="text-sm font-medium text-gray-500 mb-1">Customer Notes</p>
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
                        Requested on {new Date(booking.createdAt).toLocaleString()}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {booking.status === 'pending' && (
                      <div className="flex flex-col sm:flex-row gap-3 sm:min-w-[200px]">
                        <button
                          onClick={() => handleAccept(booking.bookingId)}
                          className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(booking.bookingId)}
                          className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Reject
                        </button>
                        <a
                          href={`mailto:${booking.userEmail}?subject=Regarding Booking ${booking.bookingId}`}
                          className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Call
                        </a>
                        <button
                          onClick={() => alert('Chat feature coming soon!')}
                          className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          Chat
                        </button>
                      </div>
                    )}

                    {booking.status === 'accepted' && (
                      <div className="flex flex-col sm:flex-row gap-3 sm:min-w-[200px]">
                        <a
                          href={`mailto:${booking.userEmail}`}
                          className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Contact
                        </a>
                        <button
                          onClick={() => alert('Chat feature coming soon!')}
                          className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          Chat
                        </button>
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

