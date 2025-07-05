import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact JustKaaj | Get in Touch with Our Team",
  description: "Contact JustKaaj for all your service needs, questions, and support. Our team is here to help you.",
  openGraph: {
    title: "Contact JustKaaj | Get in Touch with Our Team",
    description: "Contact JustKaaj for all your service needs, questions, and support. Our team is here to help you.",
    url: "https://justkaaj.com/contact",
    siteName: "JustKaaj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact JustKaaj | Get in Touch with Our Team",
    description: "Contact JustKaaj for all your service needs, questions, and support. Our team is here to help you.",
  },
  alternates: {
    canonical: "https://justkaaj.com/contact",
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with our team. We&apos;re here to help with all your service needs 
                and answer any questions you may have.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500"
                  aria-label="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500"
                  aria-label="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Type your message here..."
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500"
                  aria-label="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors font-medium"
                aria-label="Send message"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 