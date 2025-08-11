import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact JustKaaj | Get in Touch with Our Team",
  description:
    "Contact JustKaaj for all your service needs, questions, and support. Our team is here to help you.",
  openGraph: {
    title: "Contact JustKaaj | Get in Touch with Our Team",
    description:
      "Contact JustKaaj for all your service needs, questions, and support. Our team is here to help you.",
    url: "https://justkaaj.com/contact",
    siteName: "JustKaaj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact JustKaaj | Get in Touch with Our Team",
    description:
      "Contact JustKaaj for all your service needs, questions, and support. Our team is here to help you.",
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
      <main className="min-h-screen bg-green-50">
        {/* Hero Section */}
        <section className="bg-green-100 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-green-700 max-w-3xl mx-auto">
              We&apos;re here to assist you with any service inquiries, support
              requests, or general questions.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto border border-green-100">
            <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
              Our Contact Information
            </h2>
            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">📍</span>
                <span>
                  Police Plaza, 7th Floor, Gulshan-1, Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">📞</span>
                <a
                  href="tel:+8801339563656"
                  className="hover:underline text-green-700"
                >
                  +880 1339-563656
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✉️</span>
                <a
                  href="mailto:info@justkaaj.com"
                  className="hover:underline text-green-700"
                >
                  info@justkaaj.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl">🌐</span>
                <a
                  href="http://www.justkaaj.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-green-700"
                >
                  www.justkaaj.com
                </a>
              </li>
            </ul>

            {/* Google Map */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-md border border-green-100">
              <iframe
                title="Police Plaza Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.506850946247!2d90.41422657512984!3d23.77293488907351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a6e4fd15c7%3A0xbab66d76c3f4ed9c!2sPolice%20Plaza%20Concord!5e0!3m2!1sen!2sbd!4v1691837150053!5m2!1sen!2sbd"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
