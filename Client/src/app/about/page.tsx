import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About JustKaaj | Your Trusted Service Partner",
  description: "Learn about JustKaaj, our mission, values, and commitment to delivering top-quality services for your needs.",
  openGraph: {
    title: "About JustKaaj | Your Trusted Service Partner",
    description: "Learn about JustKaaj, our mission, values, and commitment to delivering top-quality services for your needs.",
    url: "https://justkaaj.com/about",
    siteName: "JustKaaj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About JustKaaj | Your Trusted Service Partner",
    description: "Learn about JustKaaj, our mission, values, and commitment to delivering top-quality services for your needs.",
  },
  alternates: {
    canonical: "https://justkaaj.com/about",
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                About JustKaaj
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner for all your service needs. We are committed to delivering 
                excellence and building lasting relationships with our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Welcome to JustKaaj – Your One-Stop Solution for Everyday Services
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At JustKaaj, we believe in simplifying life by connecting people with the right services at the right time. Whether you&apos;re a busy professional looking for help around the house or a skilled provider looking to grow your client base, JustKaaj is where reliable services meet real needs — all in one seamless platform.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  What We Do
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  JustKaaj is a smart, digital, user-friendly platform that brings together a wide range of services under one roof. From home maintenance, car care, and cleaning to beauty, childcare, tutoring, and many more — we make it easy to find trusted professionals in your area.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  At the same time, we empower service providers by giving them access to a growing network of customers and business tools that help them thrive.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 sm:p-8 max-w-md w-full mx-auto md:mx-0 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why JustKaaj is the Best Option</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700"><strong>All-in-One Access:</strong> No more switching apps or calling around. JustKaaj is your go-to for everything.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700"><strong>Verified Providers:</strong> Every professional is appraised for quality, experience, and reliability.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700"><strong>Fast, Easy Booking:</strong> Browse, book, and pay — all in a few taps.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700"><strong>24/7 Support:</strong> Our support team is readily available to assist you at every stage whenever required.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700"><strong>Real Reviews, Real Confidence:</strong> Make informed choices based on genuine feedback.</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4 italic">
                  We&apos;re not just a service marketplace — we&apos;re your personal assistant, problem-solver, and time-saver.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Behind JustKaaj is a dynamic team of tech innovators, customer care experts, and operations professionals who are passionate about building better service experiences. With backgrounds in technology, logistics, hospitality, and community support, our diverse team brings fresh ideas and practical solutions to the table — every day.
              </p>
            </div>
          </div>
        </section>

        {/* What We Value Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                What We Value
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                Our values guide everything we do, from how we treat our users to how we build our platform.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust</h3>
                <p className="text-gray-600">
                  We earn it through transparency and consistency.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Efficiency</h3>
                <p className="text-gray-600">
                  We respect your time — faster and smoother experience is our priority.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Empowerment</h3>
                <p className="text-gray-600">
                  We support both users and providers to succeed.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🧭</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We do what&apos;s right, not just what&apos;s easy.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We&apos;re always improving to meet your evolving needs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Care</h3>
                <p className="text-gray-600">
                  We&apos;re more than a service platform — we&apos;re part of the community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Care About Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                What We Care About Most
              </h2>
              <p className="text-3xl font-bold text-green-600 mb-4">People.</p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At JustKaaj, we care about making life easier — whether you&apos;re looking for help or offering it. We&apos;re committed to building a trusted ecosystem where users feel cared for and providers feel valued.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Sections */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 items-start justify-center">
              {/* Users Benefits */}
              <div className="max-w-xl w-full mx-auto md:mx-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">
                  Why Users Benefit from JustKaaj
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Save time by finding reliable help instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Peace of mind with verified and rated providers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">One platform for all your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Fair, transparent pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Excellent customer service and support</span>
                  </li>
                </ul>
              </div>

              {/* Providers Benefits */}
              <div className="max-w-xl w-full mx-auto md:mx-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">
                  Why Providers Love JustKaaj
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Get discovered by more customers, faster through our community and Ads systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Keep control of your schedule and rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Fast, fair payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Grow your reputation with reviews and repeat clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Join a supportive community of professionals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Values Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                🔹 Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At JustKaaj, our values are the foundation of everything we do. They guide our decisions, shape our culture, and drive our commitment to both users and service providers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">🔐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We believe trust is earned through transparency, accountability, and consistency. Every service booked, every provider verified, and every interaction matters. Our platform is built to foster confidence — for both customers and professionals.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Efficiency</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We prioritize speed, convenience, and seamless user experience. Whether you&apos;re booking a service or offering one, we streamline the process so you can focus on what truly matters — getting the job done right.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Empowerment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We&apos;re committed to empowering people. For users, that means easy access to reliable help. For providers, it means new income opportunities, independence, and the tools to grow their brand and reputation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">🧭</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We operate with honesty and fairness at all levels. Our policies, pricing, and practices are designed to be clear and ethical — no hidden terms, no misleading promises.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We continuously improve our platform to stay ahead of evolving needs. Through smart technology and user feedback, we adapt, learn, and enhance our services — making life simpler for everyone.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Care</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We&apos;re more than a service platform — we&apos;re part of the community. We aim to create economic opportunities, promote inclusion, and support the well-being of everyone who joins our ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 