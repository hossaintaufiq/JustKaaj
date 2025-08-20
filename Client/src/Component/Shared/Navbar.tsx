"use client";
import { protectedRoutes } from "@/constants";
import { useUser } from "@/context/UserContext";
import { getCurrentUser, logout } from "@/service/Auth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    getCurrentUser();
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-white shadow-sm relative z-40">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* <img src="/logo.svg" alt="JustKaaj Logo"  /> */}
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
          <Link
            href="/"
            className={
              pathname === "/" ? "text-green-500" : "hover:text-green-500"
            }
          >
            Home
          </Link>
          <Link
            href="/service"
            className={
              pathname === "/service"
                ? "text-green-500"
                : "hover:text-green-500"
            }
          >
            Service
          </Link>
          <Link
            href="/blog"
            className={
              pathname === "/blog" ? "text-green-500" : "hover:text-green-500"
            }
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about" ? "text-green-500" : "hover:text-green-500"
            }
          >
            About us
          </Link>

          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-green-500"
                : "hover:text-green-500"
            }
          >
            Contact
          </Link>

          {/* Legal Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLegalDropdownOpen(!isLegalDropdownOpen)}
              className="flex items-center space-x-1 text-gray-700 hover:text-green-500 text-sm font-medium transition-colors"
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
              <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
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
        </div>

        {/* Desktop Right Side - Auth and Profile */}
        <div className="hidden md:flex items-center space-x-3">
          {!user?.email ? (
            // Not Logged In: Show Login & Sign Up
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
            // Logged In: Show Profile Dropdown
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-green-600
             bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600 
             focus:outline-none focus:ring-2 focus:ring-green-400 
             transition-all duration-200"
              >
                <span className="text-lg">👤</span>
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <Link
                    href={`/profile/${user.role.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>

                  {user?.role === "SERVICE_PROVIDER" && (
                    <div>
                      <Link
                        href="/profile/provider"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        My Services
                      </Link>
                      <Link
                        href="/service-create"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        Create Service
                      </Link>
                    </div>
                  )}

                  {user?.role === "ADMIN" && (
                    <Link
                      href="/admin/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
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
            <Link
              href="/"
              className={`block text-lg font-medium py-2 ${
                pathname === "/"
                  ? "text-green-500"
                  : "text-gray-700 hover:text-green-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/service"
              className={`block text-lg font-medium py-2 ${
                pathname === "/service"
                  ? "text-green-500"
                  : "text-gray-700 hover:text-green-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Service
            </Link>
            <Link
              href="/about"
              className={`block text-lg font-medium py-2 ${
                pathname === "/about"
                  ? "text-green-500"
                  : "text-gray-700 hover:text-green-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/blog"
              className={`block text-lg font-medium py-2 ${
                pathname === "/blog"
                  ? "text-green-500"
                  : "text-gray-700 hover:text-green-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`block text-lg font-medium py-2 ${
                pathname === "/contact"
                  ? "text-green-500"
                  : "text-gray-700 hover:text-green-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Legal Pages in Mobile Menu */}
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

            {/* Mobile Auth and Profile Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              {!user?.email ? (
                <div>
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
              ) : (
                // Mobile Profile Links
                <div className="pt-2 border-t border-gray-200">
                  <Link
                    href={`/profile/${user?.role.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  {user?.role === "SERVICE_PROVIDER" && (
                    <div>
                      <Link
                        href="/profile/provider"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        My Services
                      </Link>
                      <Link
                        href="/service-create"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        Create Service
                      </Link>
                    </div>
                  )}
                  {user?.role === "ADMIN" && (
                    <Link
                      href="/admin/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                  {user?.role === "SERVICE_PROVIDER" && (
                    <div>
                      <Link
                        href="/profile/provider"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        My Services
                      </Link>
                      <Link
                        href="/service-create"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        Create Service
                      </Link>
                    </div>
                  )}

                  {user?.role === "ADMIN" && (
                    <Link
                      href="/admin/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
