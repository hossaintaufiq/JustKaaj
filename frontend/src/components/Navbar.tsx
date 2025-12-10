'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface NavbarProps {
  onLinkClick?: () => void;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface Notification {
  _id: string;
  type: 'application_approved' | 'application_rejected' | 'application_on_hold';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export default function Navbar({ onLinkClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isProvider, setIsProvider] = useState<boolean | null>(null);
  const [checkingProvider, setCheckingProvider] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut, loading, getIdToken } = useAuth();
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const notificationMenuRef = useRef<HTMLDivElement>(null);
  const hasCheckedProviderRef = useRef(false);

  // Check if user is a provider
  useEffect(() => {
    // Reset state when user changes
    if (!user) {
      setIsProvider(false);
      hasCheckedProviderRef.current = false;
      return;
    }

    // Only check if not already checking and not already checked for this user
    if (checkingProvider || hasCheckedProviderRef.current) return;

    const checkProviderStatus = async () => {
      hasCheckedProviderRef.current = true;
      setCheckingProvider(true);
      try {
        const token = await getIdToken();
        if (!token) {
          setIsProvider(false);
          setCheckingProvider(false);
          hasCheckedProviderRef.current = false;
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

    if (user && !loading) {
      checkProviderStatus();
    }
  }, [user, loading, getIdToken]);

  // Fetch notifications
  useEffect(() => {
    if (user && !loading) {
      fetchNotifications();
      // Poll for new notifications every 30 seconds
      const interval = setInterval(fetchNotifications, 30000);
      return () => clearInterval(interval);
    }
  }, [user, loading]);

  const fetchNotifications = async () => {
    if (!user) return;
    try {
      const token = await getIdToken();
      if (!token) return;

      const response = await fetch(`${API_URL}/api/providers/notifications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNotifications(data.notifications || []);
        setUnreadCount(data.unreadCount || 0);
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      const token = await getIdToken();
      if (!token) return;

      await fetch(`${API_URL}/api/providers/notifications/${notificationId}/read`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchNotifications();
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const markAllAsRead = async () => {
    try {
      const token = await getIdToken();
      if (!token) return;

      await fetch(`${API_URL}/api/providers/notifications/read-all`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchNotifications();
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  // Close profile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node) &&
        notificationMenuRef.current &&
        !notificationMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
        setIsNotificationMenuOpen(false);
      }
    };

    if (isProfileMenuOpen || isNotificationMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileMenuOpen, isNotificationMenuOpen]);

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

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
      setIsProfileMenuOpen(false);
    } catch (error) {
      console.error('Sign out error:', error);
    }
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
    return user?.email?.[0].toUpperCase() || 'U';
  };

  // Build nav links based on user and provider status
  // Only show conditional links after provider check is complete (prevents flashing)
  const isCheckingProvider = user && isProvider === null;
  
  const navLinks = [
    { href: '/', label: 'Home' },
    // Don't show conditional links while checking provider status
    ...(isCheckingProvider
      ? []
      : isProvider === true
      ? [
          { href: '/provider/dashboard', label: 'Dashboard' },
          { href: '/provider/bookings', label: 'Bookings' },
        ]
      : [
          { href: '/services', label: 'All Services' },
          { href: '/become-provider', label: 'Become a Provider' },
          { href: '/my-bookings', label: 'My Bookings' },
        ]),
    // Auth links for non-logged-in users
    ...(user && !isCheckingProvider
      ? []
      : !user
      ? [
          { href: '/signin', label: 'Sign In' },
          { href: '/join', label: 'Join' },
        ]
      : []),
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

        {/* Notifications - Desktop */}
        {!loading && user && (
          <div className="relative mr-2" ref={notificationMenuRef}>
            <button
              onClick={() => {
                setIsNotificationMenuOpen(!isNotificationMenuOpen);
                setIsProfileMenuOpen(false);
              }}
              className="relative p-2 text-gray-700 hover:text-green-500 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {isNotificationMenuOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Mark all as read
                    </button>
                  )}
                </div>
                <div className="py-2">
                  {notifications.length === 0 ? (
                    <div className="px-4 py-8 text-center text-gray-500">
                      No notifications
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification._id}
                        onClick={() => {
                          if (!notification.isRead) {
                            markAsRead(notification._id);
                          }
                        }}
                        className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 ${
                          notification.isRead
                            ? 'border-transparent'
                            : notification.type === 'application_approved' || notification.type === 'booking_accepted'
                            ? 'border-green-500'
                            : notification.type === 'application_rejected' || notification.type === 'booking_rejected'
                            ? 'border-red-500'
                            : notification.type === 'booking_request' || notification.type === 'booking_confirmation'
                            ? 'border-blue-500'
                            : 'border-yellow-500'
                        }`}
                      >
                        <div className="flex items-start">
                          <div className="flex-1">
                            <p className={`text-sm font-medium ${notification.isRead ? 'text-gray-700' : 'text-gray-900'}`}>
                              {notification.title}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {new Date(notification.createdAt).toLocaleString()}
                            </p>
                          </div>
                          {!notification.isRead && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* User Profile Avatar - Desktop */}
        {!loading && user && (
          <div className="relative" ref={profileMenuRef}>
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || user.email || 'User'}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-lg">{getUserInitials()}</span>
              )}
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <Link
                  href="/profile"
                  onClick={() => {
                    setIsProfileMenuOpen(false);
                    onLinkClick?.();
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    My Profile
                  </div>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Sign Out
                  </div>
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Mobile Header Icons */}
      <div className="md:hidden flex items-center gap-2">
        {/* Notifications - Mobile */}
        {!loading && user && (
          <div className="relative" ref={notificationMenuRef}>
            <button
              onClick={() => {
                setIsNotificationMenuOpen(!isNotificationMenuOpen);
                setIsMenuOpen(false);
              }}
              className="relative p-2 text-gray-700 hover:text-green-500 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown - Mobile */}
            {isNotificationMenuOpen && (
              <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsNotificationMenuOpen(false)}>
                <div className="absolute top-16 right-4 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-[calc(100vh-100px)] overflow-y-auto">
                  <div className="p-4 border-b flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>
                  <div className="py-2">
                    {notifications.length === 0 ? (
                      <div className="px-4 py-8 text-center text-gray-500">
                        No notifications
                      </div>
                    ) : (
                      notifications.map((notification) => (
                        <div
                          key={notification._id}
                          onClick={() => {
                            if (!notification.isRead) {
                              markAsRead(notification._id);
                            }
                          }}
                          className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 ${
                            notification.isRead
                              ? 'border-transparent'
                              : notification.type === 'application_approved' || notification.type === 'booking_accepted'
                              ? 'border-green-500'
                              : notification.type === 'application_rejected' || notification.type === 'booking_rejected'
                              ? 'border-red-500'
                              : notification.type === 'booking_request' || notification.type === 'booking_confirmation'
                              ? 'border-blue-500'
                              : 'border-yellow-500'
                          }`}
                        >
                          <div className="flex items-start">
                            <div className="flex-1">
                              <p className={`text-sm font-medium ${notification.isRead ? 'text-gray-700' : 'text-gray-900'}`}>
                                {notification.title}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">
                                {notification.message}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                {new Date(notification.createdAt).toLocaleString()}
                              </p>
                            </div>
                            {!notification.isRead && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="text-gray-700 focus:outline-none p-2 -mr-2 transition-transform duration-200 hover:scale-110"
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
      </div>

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

                {/* User Profile - Mobile */}
                {!loading && user && (
                  <>
                    <Link
                      href="/profile"
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive('/profile')
                          ? 'bg-green-50 text-green-500 border-l-4 border-green-500'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-green-400'
                      }`}
                      onClick={handleLinkClick}
                    >
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-semibold mr-3">
                          {user.photoURL ? (
                            <img
                              src={user.photoURL}
                              alt={user.displayName || user.email || 'User'}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <span className="text-sm">{getUserInitials()}</span>
                          )}
                        </div>
                        My Profile
                      </div>
                    </Link>
                    <button
                      onClick={async () => {
                        await handleSignOut();
                        handleLinkClick();
                      }}
                      className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-red-600 hover:bg-red-50 transition-all duration-200"
                    >
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        Sign Out
                      </div>
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}

