'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface ProviderApplication {
  _id: string;
  userId: string;
  userEmail: string;
  userName?: string;
  businessName: string;
  serviceCategory: string;
  yearsOfExperience: number;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  businessLicense: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  portfolioWebsite?: string;
  reference1Name?: string;
  reference1Contact?: string;
  reference2Name?: string;
  reference2Contact?: string;
  additionalInfo?: string;
  status: 'pending' | 'approved' | 'rejected' | 'on_hold';
  submittedAt: string;
  reviewedAt?: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [applications, setApplications] = useState<ProviderApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedApplication, setSelectedApplication] = useState<ProviderApplication | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected' | 'on_hold'>('all');

  useEffect(() => {
    // Check if admin is logged in
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchApplications();
  }, [router, filter]);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const url = filter === 'all' 
        ? `${API_URL}/api/admin/applications`
        : `${API_URL}/api/admin/applications?status=${filter}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('adminEmail');
          router.push('/admin/login');
          return;
        }
        throw new Error(data.message || 'Failed to fetch applications');
      }

      setApplications(data.applications || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load applications');
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (applicationId: string, action: 'approve' | 'reject' | 'on-hold') => {
    setActionLoading(applicationId);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_URL}/api/admin/applications/${applicationId}/${action}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Failed to ${action} application`);
      }

      // Refresh applications list
      await fetchApplications();
      setSelectedApplication(null);
    } catch (err: any) {
      alert(err.message || `Failed to ${action} application`);
    } finally {
      setActionLoading(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    router.push('/admin/login');
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'on_hold':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'on_hold':
        return 'On Hold';
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        {/* Admin pages don't use Header to avoid Firebase Auth conflicts */}
        <div className="border-b border-gray-200 bg-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-green-500">
                JustKaaj
              </a>
              <span className="text-sm text-gray-600">Admin Panel</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-gray-600">Loading...</div>
        </div>
        <footer className="bg-gray-100 border-t border-gray-200 py-6 mt-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} JustKaaj. All rights reserved.</p>
          </div>
        </footer>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Admin pages don't use Header to avoid Firebase Auth conflicts */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-green-500">
              JustKaaj
            </a>
            <span className="text-sm text-gray-600">Admin Panel</span>
          </div>
        </div>
      </div>
      <section className="py-8 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage Provider Applications</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Filters */}
          <div className="mb-6 flex gap-2 flex-wrap">
            {(['all', 'pending', 'approved', 'rejected', 'on_hold'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === status
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {status === 'all' ? 'All' : getStatusLabel(status)} ({applications.filter(app => status === 'all' || app.status === status).length})
              </button>
            ))}
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Applications List */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Business Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                        No applications found
                      </td>
                    </tr>
                  ) : (
                    applications.map((app) => (
                      <tr key={app._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{app.businessName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 capitalize">{app.serviceCategory}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{app.userEmail}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(app.status)}`}>
                            {getStatusLabel(app.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(app.submittedAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => setSelectedApplication(app)}
                            className="text-green-600 hover:text-green-900 mr-4"
                          >
                            View
                          </button>
                          {app.status === 'pending' || app.status === 'on_hold' ? (
                            <>
                              <button
                                onClick={() => handleAction(app._id, 'approve')}
                                disabled={actionLoading === app._id}
                                className="text-blue-600 hover:text-blue-900 mr-2 disabled:opacity-50"
                              >
                                {actionLoading === app._id ? 'Processing...' : 'Approve'}
                              </button>
                              <button
                                onClick={() => handleAction(app._id, 'reject')}
                                disabled={actionLoading === app._id}
                                className="text-red-600 hover:text-red-900 mr-2 disabled:opacity-50"
                              >
                                Reject
                              </button>
                              <button
                                onClick={() => handleAction(app._id, 'on-hold')}
                                disabled={actionLoading === app._id}
                                className="text-yellow-600 hover:text-yellow-900 disabled:opacity-50"
                              >
                                On Hold
                              </button>
                            </>
                          ) : null}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Application Details Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Application Details</h2>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Business Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Business Name</label>
                      <p className="text-gray-900">{selectedApplication.businessName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Service Category</label>
                      <p className="text-gray-900 capitalize">{selectedApplication.serviceCategory}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Years of Experience</label>
                      <p className="text-gray-900">{selectedApplication.yearsOfExperience}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <p className="text-gray-900">{selectedApplication.phoneNumber}</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Address</h3>
                  <p className="text-gray-900">
                    {selectedApplication.address}, {selectedApplication.city}, {selectedApplication.state} {selectedApplication.zipCode}
                  </p>
                </div>

                {/* License & Insurance */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">License & Insurance</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Business License</label>
                      <p className="text-gray-900">{selectedApplication.businessLicense}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Insurance Provider</label>
                      <p className="text-gray-900">{selectedApplication.insuranceProvider}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Policy Number</label>
                      <p className="text-gray-900">{selectedApplication.insurancePolicyNumber}</p>
                    </div>
                    {selectedApplication.portfolioWebsite && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">Portfolio Website</label>
                        <p className="text-gray-900">
                          <a href={selectedApplication.portfolioWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {selectedApplication.portfolioWebsite}
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* References */}
                {(selectedApplication.reference1Name || selectedApplication.reference2Name) && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">References</h3>
                    <div className="space-y-2">
                      {selectedApplication.reference1Name && (
                        <p className="text-gray-900">
                          <strong>{selectedApplication.reference1Name}</strong> - {selectedApplication.reference1Contact}
                        </p>
                      )}
                      {selectedApplication.reference2Name && (
                        <p className="text-gray-900">
                          <strong>{selectedApplication.reference2Name}</strong> - {selectedApplication.reference2Contact}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Additional Info */}
                {selectedApplication.additionalInfo && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Information</h3>
                    <p className="text-gray-900 whitespace-pre-wrap">{selectedApplication.additionalInfo}</p>
                  </div>
                )}

                {/* Actions */}
                {(selectedApplication.status === 'pending' || selectedApplication.status === 'on_hold') && (
                  <div className="flex gap-4 pt-4 border-t">
                    <button
                      onClick={() => handleAction(selectedApplication._id, 'approve')}
                      disabled={actionLoading === selectedApplication._id}
                      className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(selectedApplication._id, 'reject')}
                      disabled={actionLoading === selectedApplication._id}
                      className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 disabled:opacity-50"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleAction(selectedApplication._id, 'on-hold')}
                      disabled={actionLoading === selectedApplication._id}
                      className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 disabled:opacity-50"
                    >
                      On Hold
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin pages use minimal footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-6 mt-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} JustKaaj. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

