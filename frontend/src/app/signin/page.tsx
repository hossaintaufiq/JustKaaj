'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProvider, setIsProvider] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in:', { email, password, isProvider });
  };

  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center">
                Sign In
              </h1>
              <p className="text-gray-600 text-center mb-6">
                Welcome back! Please sign in to your account.
              </p>

              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setIsProvider(false)}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                    !isProvider
                      ? 'bg-green-400 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Customer
                </button>
                <button
                  onClick={() => setIsProvider(true)}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                    isProvider
                      ? 'bg-green-400 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Provider
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-400 border-gray-300 rounded focus:ring-green-400"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-green-500 hover:text-green-600">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  Don&apos;t have an account?{' '}
                  <a href="/signup" className="text-green-500 hover:text-green-600 font-semibold">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

