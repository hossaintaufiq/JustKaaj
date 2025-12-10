'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ProfilePage() {
  const { user, signOut, loading, getIdToken } = useAuth();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isProvider, setIsProvider] = useState<boolean | null>(null);
  const [checkingProvider, setCheckingProvider] = useState(false);
  const hasCheckedRef = useRef(false);

  // Check if user is a provider
  useEffect(() => {
    const checkProviderStatus = async () => {
      if (!user) {
        setIsProvider(false);
        setCheckingProvider(false);
        hasCheckedRef.current = false;
        return;
      }

      // Only check once per user session
      if (hasCheckedRef.current || checkingProvider) return;

      hasCheckedRef.current = true;
      setCheckingProvider(true);
      try {
        const token = await getIdToken();
        if (!token) {
          setIsProvider(false);
          setCheckingProvider(false);
          return;
        }

        const response = await fetch(`${API_URL}/api/providers/check`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setIsProvider(data.isProvider || false);
      } catch (error) {
        console.error('Error checking provider status:', error);
        setIsProvider(false);
      } finally {
        setCheckingProvider(false);
      }
    };

    checkProviderStatus();
  }, [user, getIdToken]);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
      router.push('/');
    } catch (error: any) {
      console.error('Sign out error:', error);
    } finally {
      setIsSigningOut(false);
    }
  };

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

  if (!user) {
    router.push('/signin');
    return null;
  }

  const getUserInitials = () => {
    if (user.displayName) {
      return user.displayName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return user.email?.[0].toUpperCase() || 'U';
  };

  const getUserName = () => {
    return user.displayName || user.email?.split('@')[0] || 'User';
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-green-400 to-green-600 px-6 sm:px-8 py-8 sm:py-12">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Avatar */}
                <div className="relative">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={getUserName()}
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
                    {getUserName()}
                  </h1>
                  <p className="text-white/90 text-sm sm:text-base mb-4">{user.email}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {user.emailVerified && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified
                      </span>
                    )}
                    {!checkingProvider && (
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                          isProvider
                            ? 'bg-blue-500/20 text-white border-blue-300/30'
                            : 'bg-white/20 text-white border-white/30'
                        }`}
                      >
                        {isProvider ? (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                            Provider
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Normal User
                          </>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-6 sm:p-8">
              {/* Account Details */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Account Details</h2>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-200">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Full Name</p>
                      <p className="text-base text-gray-900 mt-1">
                        {user.displayName || 'Not set'}
                      </p>
                    </div>
                    <button className="mt-2 sm:mt-0 text-sm text-green-500 hover:text-green-600 font-medium">
                      Edit
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-200">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email Address</p>
                      <p className="text-base text-gray-900 mt-1">{user.email}</p>
                    </div>
                    <button className="mt-2 sm:mt-0 text-sm text-green-500 hover:text-green-600 font-medium">
                      Edit
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-gray-200">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone Number</p>
                      <p className="text-base text-gray-900 mt-1">
                        {user.phoneNumber || 'Not set'}
                      </p>
                    </div>
                    <button className="mt-2 sm:mt-0 text-sm text-green-500 hover:text-green-600 font-medium">
                      Add
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Account Created</p>
                      <p className="text-base text-gray-900 mt-1">
                        {user.metadata.creationTime
                          ? new Date(user.metadata.creationTime).toLocaleDateString()
                          : 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Account Actions</h2>
                <div className="space-y-3">
                  <button
                    onClick={handleSignOut}
                    disabled={isSigningOut}
                    className="w-full sm:w-auto px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSigningOut ? 'Signing out...' : 'Sign Out'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

