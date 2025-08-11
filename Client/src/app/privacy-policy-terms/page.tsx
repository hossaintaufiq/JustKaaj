import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Use | JustKaaj - Your Trusted Service Partner",
  description: "Read JustKaaj's privacy policy and terms of use to understand how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy & Terms of Use | JustKaaj - Your Trusted Service Partner",
    description: "Read JustKaaj's privacy policy and terms of use to understand how we collect, use, and protect your personal information.",
    url: "https://justkaaj.com/privacy-policy-terms",
    siteName: "JustKaaj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & Terms of Use | JustKaaj - Your Trusted Service Partner",
    description: "Read JustKaaj's privacy policy and terms of use to understand how we collect, use, and protect your personal information.",
  },
  alternates: {
    canonical: "https://justkaaj.com/privacy-policy-terms",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyTermsPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Privacy Policy & Terms of Use
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                This policy outlines how we collect, use, and protect your data, as well as the rules and responsibilities that govern your use of our platform.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Effective Date: January 1, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            
            {/* Introduction */}
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Welcome to JustKaaj. This Privacy Policy and Terms of Use outlines how we collect, use, and protect your data, as well as the rules and responsibilities that govern your use of our platform — whether as a user or a service provider.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using the JustKaaj platform, you agree to comply with the terms below. If you do not agree with any part of this policy, please refrain from using our services.
              </p>
            </div>

            {/* User Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. User Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">
                As a registered User of JustKaaj, you are expected to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide accurate and up-to-date personal information.</li>
                <li>Use services only for lawful and ethical purposes.</li>
                <li>Treat service providers with respect and professionalism.</li>
                <li>Make payments in a timely and transparent manner.</li>
                <li>Avoid fraudulent bookings, harassment, abuse, or misuse of the platform.</li>
                <li>Respect cancellation and rescheduling policies as outlined in our service terms.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                Consequences of Violation:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Temporary or permanent suspension of your account.</li>
                <li>Restriction from future bookings.</li>
                <li>Legal proceedings in cases of fraud, abuse, or harassment.</li>
                <li>Forfeiture of service access without refund in cases of severe misconduct.</li>
              </ul>
            </div>

            {/* Service Provider Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Service Provider Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">
                As a Service Provider, you are required to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Submit valid identification and qualification documents for verification.</li>
                <li>Provide honest, safe, timely, and high-quality services.</li>
                <li>Maintain professional conduct, hygiene, and punctuality.</li>
                <li>Treat users and their property with utmost respect.</li>
                <li>Avoid unethical practices, including no-shows, price manipulation, or false reviews.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                Consequences of Violation:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Immediate suspension or termination of provider account.</li>
                <li>Withholding of payment for incomplete or fraudulent services.</li>
                <li>Exclusion from JustKaaj promotions and advertising.</li>
                <li>Legal liability in the event of user harm, property damage, or misconduct.</li>
              </ul>
            </div>

            {/* Verification & Vetting Process */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Verification & Vetting Process
              </h2>
              <p className="text-gray-600 mb-4">
                To maintain a safe and trustworthy platform:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                For Users:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Mandatory mobile number verification during registration.</li>
                <li>Optional ID and address verification for high-value service requests.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                For Service Providers:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>National ID or Passport submission.</li>
                <li>Background check (e.g., police clearance where applicable).</li>
                <li>Review of skills, certifications, or work history.</li>
                <li>Screening interview (in-person or via video call).</li>
                <li>Ongoing performance review and customer feedback monitoring.</li>
              </ul>
              
              <p className="text-gray-600 mt-4">
                Verified providers receive a &quot;Verified Badge&quot; on their profile.
              </p>
            </div>

            {/* Data Privacy & Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Data Privacy & Security
              </h2>
              <p className="text-gray-600 mb-4">
                At JustKaaj, we are committed to protecting your personal Information.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Data Collection:
              </h3>
              <p className="text-gray-600 mb-2">
                We collect only the information necessary to provide and improve our services, such as:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Name, contact details, and service preferences.</li>
                <li>Location data (to match with providers nearby).</li>
                <li>Transaction history and feedback.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                Data Usage:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Your data is used solely for service fulfillment, customer support, and platform improvement.</li>
                <li>We do not sell, trade, or share your information with third parties without your consent.</li>
                <li>Financial data is encrypted using industry-standard security protocols.</li>
                <li>Only authorized personnel have controlled access to your information.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                Your Rights:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>You may update or correct your personal data at any time.</li>
                <li>You may request deletion of your account and data (subject to legal retention requirements).</li>
                <li>You may opt out of promotional communications at any time.</li>
              </ul>
            </div>

            {/* Reporting, Complaints & Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Reporting, Complaints & Dispute Resolution
              </h2>
              <p className="text-gray-600 mb-4">
                If you encounter any issues, we encourage prompt reporting through the following methods:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Use the in-app &quot;Report&quot; feature.</li>
                <li>Email us at support@justkaaj.com.</li>
                <li>Call our helpline at [Insert Helpline Number].</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                Dispute Resolution:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>All complaints are investigated within 48 hours.</li>
                <li>JustKaaj acts as a neutral mediator in disputes between users and providers.</li>
                <li>Repeated or unresolved violations may result in legal escalation or permanent removal from the platform.</li>
              </ul>
            </div>

            {/* Policy Changes */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Policy Changes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                JustKaaj reserves the right to update or modify this policy at any time. All major updates will be communicated to users via app notifications or email. Continued use of our platform after changes indicates acceptance of the revised policy.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                For any privacy concerns or policy-related queries, please contact:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">JustKaaj Support Team</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2">📧</span>
                    <span>Email: support@justkaaj.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 