'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface Provider {
  _id: string;
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
  businessDescription?: string;
  hourlyRate?: number;
  availability?: string;
  serviceAreas?: string[];
  certifications?: string[];
  specialties?: string[];
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  approvedAt: string;
}

export default function ProviderDashboardPage() {
  const { user, loading: authLoading, getIdToken } = useAuth();
  const router = useRouter();
  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [formData, setFormData] = useState({
    businessName: '',
    serviceCategory: '',
    yearsOfExperience: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    businessLicense: '',
    insuranceProvider: '',
    insurancePolicyNumber: '',
    portfolioWebsite: '',
    businessDescription: '',
    hourlyRate: '',
    availability: '',
    serviceAreas: '',
    certifications: '',
    specialties: '',
    facebookUrl: '',
    instagramUrl: '',
    linkedinUrl: '',
    twitterUrl: '',
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/signin');
      return;
    }

    if (user) {
      fetchProviderData();
    }
  }, [user, authLoading, router]);

  const fetchProviderData = async () => {
    try {
      const token = await getIdToken();
      if (!token) {
        router.push('/signin');
        return;
      }

      const response = await fetch(`${API_URL}/api/providers/dashboard`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 403) {
          router.push('/become-provider');
          return;
        }
        throw new Error(data.message || 'Failed to load dashboard');
      }

      setProvider(data.provider);
      // Populate form data
      setFormData({
        businessName: data.provider.businessName || '',
        serviceCategory: data.provider.serviceCategory || '',
        yearsOfExperience: data.provider.yearsOfExperience?.toString() || '',
        phoneNumber: data.provider.phoneNumber || '',
        address: data.provider.address || '',
        city: data.provider.city || '',
        state: data.provider.state || '',
        zipCode: data.provider.zipCode || '',
        businessLicense: data.provider.businessLicense || '',
        insuranceProvider: data.provider.insuranceProvider || '',
        insurancePolicyNumber: data.provider.insurancePolicyNumber || '',
        portfolioWebsite: data.provider.portfolioWebsite || '',
        businessDescription: data.provider.businessDescription || '',
        hourlyRate: data.provider.hourlyRate?.toString() || '',
        availability: data.provider.availability || '',
        serviceAreas: data.provider.serviceAreas?.join(', ') || '',
        certifications: data.provider.certifications?.join(', ') || '',
        specialties: data.provider.specialties?.join(', ') || '',
        facebookUrl: data.provider.facebookUrl || '',
        instagramUrl: data.provider.instagramUrl || '',
        linkedinUrl: data.provider.linkedinUrl || '',
        twitterUrl: data.provider.twitterUrl || '',
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load dashboard';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSaveSuccess(false);

    try {
      const token = await getIdToken();
      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await fetch(`${API_URL}/api/providers/dashboard`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      setProvider(data.provider);
      setIsEditing(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update profile';
      setError(errorMessage);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    // Reset form data to original provider data
    if (provider) {
      setFormData({
        businessName: provider.businessName || '',
        serviceCategory: provider.serviceCategory || '',
        yearsOfExperience: provider.yearsOfExperience?.toString() || '',
        phoneNumber: provider.phoneNumber || '',
        address: provider.address || '',
        city: provider.city || '',
        state: provider.state || '',
        zipCode: provider.zipCode || '',
        businessLicense: provider.businessLicense || '',
        insuranceProvider: provider.insuranceProvider || '',
        insurancePolicyNumber: provider.insurancePolicyNumber || '',
        portfolioWebsite: provider.portfolioWebsite || '',
        businessDescription: provider.businessDescription || '',
        hourlyRate: provider.hourlyRate?.toString() || '',
        availability: provider.availability || '',
        serviceAreas: provider.serviceAreas?.join(', ') || '',
        certifications: provider.certifications?.join(', ') || '',
        specialties: provider.specialties?.join(', ') || '',
        facebookUrl: provider.facebookUrl || '',
        instagramUrl: provider.instagramUrl || '',
        linkedinUrl: provider.linkedinUrl || '',
        twitterUrl: provider.twitterUrl || '',
      });
    }
    setIsEditing(false);
    setError('');
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
            <p className="text-gray-600 mb-4">You are not an approved provider</p>
            <a href="/become-provider" className="text-green-500 hover:text-green-600 font-medium">
              Apply to become a provider
            </a>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const getCategoryLabel = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
  };

  const getUserInitials = () => {
    if (user?.displayName) {
      return user.displayName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return user?.email?.[0].toUpperCase() || 'P';
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Profile Picture */}
              <div className="relative">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || user.email || 'Provider'}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white text-green-600 flex items-center justify-center text-3xl sm:text-4xl font-bold border-4 border-white shadow-lg">
                    {getUserInitials()}
                  </div>
                )}
                <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {user?.displayName || user?.email?.split('@')[0] || 'Provider'}
                </h1>
                <p className="text-white/90 text-sm sm:text-base mb-2">{user?.email}</p>
                {provider && (
                  <p className="text-white/90 text-lg font-semibold">{provider.businessName}</p>
                )}
              </div>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Provider Dashboard</h2>
              <p className="text-gray-600">Manage your provider profile</p>
            </div>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Edit Profile
              </button>
            )}
            {isEditing && (
              <div className="flex gap-2">
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            )}
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {saveSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
              Profile updated successfully!
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            {/* Business Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{provider.businessName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Category <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <select
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    >
                      <option value="">Select category</option>
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
                  ) : (
                    <p className="text-gray-900 capitalize">{getCategoryLabel(provider.serviceCategory)}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <input
                      type="number"
                      name="yearsOfExperience"
                      value={formData.yearsOfExperience}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{provider.yearsOfExperience} years</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{provider.phoneNumber}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Description
                  </label>
                  {isEditing ? (
                    <textarea
                      name="businessDescription"
                      value={formData.businessDescription}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Describe your business..."
                    />
                  ) : (
                    <p className="text-gray-900">{provider.businessDescription || 'Not provided'}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{provider.address}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{provider.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{provider.state}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{provider.zipCode}</p>
                  )}
                </div>
              </div>
            </div>

            {/* License & Insurance */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">License & Insurance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business License <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="businessLicense"
                      value={formData.businessLicense}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{provider.businessLicense}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Insurance Provider <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="insuranceProvider"
                      value={formData.insuranceProvider}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{provider.insuranceProvider}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Insurance Policy Number <span className="text-red-500">*</span>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="insurancePolicyNumber"
                      value={formData.insurancePolicyNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  ) : (
                    <p className="text-gray-900">{provider.insurancePolicyNumber}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Business Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hourly Rate (USD)
                  </label>
                  {isEditing ? (
                    <input
                      type="number"
                      name="hourlyRate"
                      value={formData.hourlyRate}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  ) : (
                    <p className="text-gray-900">
                      {provider.hourlyRate ? `$${provider.hourlyRate.toFixed(2)}/hr` : 'Not set'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  {isEditing ? (
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <option value="">Select availability</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="weekends-only">Weekends Only</option>
                      <option value="evenings-only">Evenings Only</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  ) : (
                    <p className="text-gray-900 capitalize">
                      {provider.availability ? provider.availability.replace(/-/g, ' ') : 'Not set'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Areas (comma-separated)
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="serviceAreas"
                      value={formData.serviceAreas}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="e.g., New York, Brooklyn, Queens"
                    />
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {provider.serviceAreas && provider.serviceAreas.length > 0 ? (
                        provider.serviceAreas.map((area, index) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {area}
                          </span>
                        ))
                      ) : (
                        <p className="text-gray-500">Not set</p>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Certifications (comma-separated)
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="certifications"
                      value={formData.certifications}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="e.g., Licensed Electrician, OSHA Certified"
                    />
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {provider.certifications && provider.certifications.length > 0 ? (
                        provider.certifications.map((cert, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {cert}
                          </span>
                        ))
                      ) : (
                        <p className="text-gray-500">Not set</p>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specialties (comma-separated)
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="specialties"
                      value={formData.specialties}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="e.g., Emergency Repairs, Commercial Projects"
                    />
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {provider.specialties && provider.specialties.length > 0 ? (
                        provider.specialties.map((spec, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                            {spec}
                          </span>
                        ))
                      ) : (
                        <p className="text-gray-500">Not set</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Portfolio & Social Media */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio & Social Media</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio Website
                  </label>
                  {isEditing ? (
                    <input
                      type="url"
                      name="portfolioWebsite"
                      value={formData.portfolioWebsite}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="https://yourportfolio.com"
                    />
                  ) : (
                    <p className="text-gray-900">
                      {provider.portfolioWebsite ? (
                        <a href={provider.portfolioWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {provider.portfolioWebsite}
                        </a>
                      ) : (
                        'Not set'
                      )}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Facebook URL</label>
                  {isEditing ? (
                    <input
                      type="url"
                      name="facebookUrl"
                      value={formData.facebookUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="https://facebook.com/yourpage"
                    />
                  ) : (
                    <p className="text-gray-900">
                      {provider.facebookUrl ? (
                        <a href={provider.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {provider.facebookUrl}
                        </a>
                      ) : (
                        'Not set'
                      )}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Instagram URL</label>
                  {isEditing ? (
                    <input
                      type="url"
                      name="instagramUrl"
                      value={formData.instagramUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="https://instagram.com/yourhandle"
                    />
                  ) : (
                    <p className="text-gray-900">
                      {provider.instagramUrl ? (
                        <a href={provider.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {provider.instagramUrl}
                        </a>
                      ) : (
                        'Not set'
                      )}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                  {isEditing ? (
                    <input
                      type="url"
                      name="linkedinUrl"
                      value={formData.linkedinUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  ) : (
                    <p className="text-gray-900">
                      {provider.linkedinUrl ? (
                        <a href={provider.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {provider.linkedinUrl}
                        </a>
                      ) : (
                        'Not set'
                      )}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Twitter/X URL</label>
                  {isEditing ? (
                    <input
                      type="url"
                      name="twitterUrl"
                      value={formData.twitterUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="https://twitter.com/yourhandle"
                    />
                  ) : (
                    <p className="text-gray-900">
                      {provider.twitterUrl ? (
                        <a href={provider.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {provider.twitterUrl}
                        </a>
                      ) : (
                        'Not set'
                      )}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Account Status */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Status</h2>
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-medium">
                  Active Provider
                </span>
                <span className="text-gray-600">
                  Approved on {new Date(provider.approvedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

