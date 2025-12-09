import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BecomeProviderPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
              Become a Provider
            </h1>
            <p className="text-gray-600 text-lg mb-8 text-center leading-relaxed">
              Join our network of trusted service professionals and grow your business with JustKaaj.
            </p>
            
            <div className="bg-green-50 rounded-lg p-6 sm:p-8 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why Join JustKaaj?
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to a large customer base looking for your services</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible scheduling - work when it suits you</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Competitive commission rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Marketing and promotional support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Easy-to-use platform for managing bookings</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Application Requirements
              </h2>
              <ul className="space-y-4 text-gray-600 mb-8">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-gray-900">1.</span>
                  <span>Valid business license and insurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-gray-900">2.</span>
                  <span>Minimum 2 years of experience in your field</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-gray-900">3.</span>
                  <span>Background check clearance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-gray-900">4.</span>
                  <span>Portfolio of previous work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-gray-900">5.</span>
                  <span>References from previous clients</span>
                </li>
              </ul>
              <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors w-full sm:w-auto">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

