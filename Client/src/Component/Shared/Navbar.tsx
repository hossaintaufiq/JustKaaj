"use client";
import { protectedRoutes } from "@/constants";
import { useUser } from "@/context/UserContext";
import { logout, myProfile } from "@/service/Auth";
import { TUser } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";
import NotificationBell from "./NotificationBell";
import { getUnreadMessagesCount } from "@/service/chat";

export default function Navbar() {
  const { user, setIsLoading } = useUser();
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const [profileData, setProfileData] = useState<TUser | null>(null);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      try {
        const res = await myProfile();
        setProfileData(res.data);
        const unread = await getUnreadMessagesCount();
        setUnreadCount(unread?.data || 0);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchData();
  }, [user]);

  const handleLogOut = async () => {
    try {
      setIsLoading(true);
      await logout();
      router.refresh();

      if (protectedRoutes.some((route) => pathname.match(route))) {
        router.push("/");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-white shadow-sm relative z-40">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div>
            <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-black leading-none">
              Just
              <span className="text-green-500 font-bold text-2xl sm:text-3xl lg:text-4xl">
                K
              </span>
              <span className="text-green-500">aaj</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 leading-none">
              Your trusted service partner
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {[
            { name: "Home", path: "/" },
            { name: "Service", path: "/service" },
            { name: "Blog", path: "/blog" },
            { name: "About us", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={
                pathname === link.path
                  ? "text-green-500"
                  : "hover:text-green-500 transition"
              }
            >
              {link.name}
            </Link>
          ))}

          {/* Legal Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLegalDropdownOpen(!isLegalDropdownOpen)}
              className="flex items-center space-x-1 text-gray-700 hover:text-green-500 transition"
            >
              <span>Legal</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isLegalDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isLegalDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 z-50">
                <Link
                  href="/privacy-policy-terms"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                  onClick={() => setIsLegalDropdownOpen(false)}
                >
                  Privacy Policy & Terms of Use
                </Link>
              </div>
            )}
          </div>

          {/* Service Provider Menu */}
          {user?.role === "SERVICE_PROVIDER" && (
            <div className="relative">
              <button
                onClick={() =>
                  setIsBusinessDropdownOpen(!isBusinessDropdownOpen)
                }
                className="flex items-center space-x-1 text-gray-700 hover:text-green-500 transition"
              >
                <span>My Business</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isBusinessDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isBusinessDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                  <Link
                    href="/my-services"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    onClick={() => setIsBusinessDropdownOpen(false)}
                  >
                    My Services
                  </Link>
                  <Link
                    href="/service-create"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    onClick={() => setIsBusinessDropdownOpen(false)}
                  >
                    Add Service
                  </Link>
                  <Link
                    href="/service-history"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    onClick={() => setIsBusinessDropdownOpen(false)}
                  >
                    Service History
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side - Messages, Notifications, Profile */}
        <div className="hidden md:flex items-center space-x-4">
          {user?.email && (
            <>
              <Link
                href="/messages"
                className={`relative p-2 rounded-full hover:bg-green-50 transition ${
                  pathname === "/messages" ? "text-green-600" : "text-gray-600"
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {unreadCount}
                </span>
              </Link>

              {/* Notification Bell */}
              <NotificationBell />
            </>
          )}

          {!user?.email ? (
            <>
              <Link
                href="/login"
                className="text-gray-700 hover:text-green-500 text-sm font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                href="/registration"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-green-600 bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 overflow-hidden"
              >
                {profileData?.profileImage ? (
                  <Image
                    width={100}
                    height={100}
                    src={profileData.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-lg">👤</span>
                )}
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 z-50">
                  <Link
                    href={`/profile/${user.role.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  {user?.role === "ADMIN" && (
                    <Link
                      href="/admin/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  {user?.role === "USER" && (
                    <Link
                      href="/my-order"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      My Orders
                    </Link>
                  )}
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50 text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "Service", path: "/service" },
              { name: "Blog", path: "/blog" },
              { name: "About us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block text-lg font-medium py-2 ${
                  pathname === link.path
                    ? "text-green-500"
                    : "text-gray-700 hover:text-green-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Legal */}
            <div className="pt-2 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-500 mb-2">Legal</p>
              <Link
                href="/privacy-policy-terms"
                className="block text-lg font-medium py-2 text-gray-700 hover:text-green-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy & Terms of Use
              </Link>
            </div>
            {user?.role === "SERVICE_PROVIDER" && (
              <div className="relative">
                <button
                  onClick={() =>
                    setIsBusinessDropdownOpen(!isBusinessDropdownOpen)
                  }
                  className="flex items-center space-x-1 text-gray-700 hover:text-green-500 transition"
                >
                  <span>My Business</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isBusinessDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isBusinessDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/my-services"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                      onClick={() => setIsBusinessDropdownOpen(false)}
                    >
                      My Services
                    </Link>
                    <Link
                      href="/service-create"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                      onClick={() => setIsBusinessDropdownOpen(false)}
                    >
                      Add Service
                    </Link>
                    <Link
                      href="/service-history"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                      onClick={() => setIsBusinessDropdownOpen(false)}
                    >
                      Service History
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Messages & Notifications */}
            {user?.email && (
              <div className="px-4 py-2 pt-4 border-t border-gray-200 space-y-3">
                {user?.role === "ADMIN" && (
                  <Link
                    href="/admin/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                {user?.role === "USER" && (
                  <Link
                    href="/my-order"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    My Order
                  </Link>
                )}
                <Link
                  href="/messages"
                  className={`relative p-2 rounded-full hover:bg-green-50 transition ${
                    pathname === "/messages"
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                    {unreadCount}
                  </span>
                </Link>
                <NotificationBell />
                <button
                  className="block w-full text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </div>
            )}

            {/* Auth Links for mobile */}
            {!user?.email && (
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link
                  href="/login"
                  className="block text-lg font-medium py-2 text-gray-700 hover:text-green-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/registration"
                  className="block text-lg font-medium py-2 text-gray-700 hover:text-green-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
