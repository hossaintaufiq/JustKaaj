import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JoinPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Join JustKaaj
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
              Be part of a trusted network connecting homeowners with reliable service professionals.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { title: 'For Customers', desc: 'Book vetted pros with transparent pricing and guaranteed quality.' },
                { title: 'For Providers', desc: 'Get matched with local jobs, flexible scheduling, and marketing support.' },
                { title: 'For Partners', desc: 'Collaborate on special projects and campaigns to reach more customers.' },
              ].map((card) => (
                <div key={card.title} className="border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/become-provider"
                className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg transition-colors"
              >
                Become a Provider
              </a>
              <a
                href="/signin"
                className="bg-white border-2 border-green-400 text-green-500 hover:bg-green-50 font-semibold px-6 sm:px-8 py-3 rounded-lg transition-colors"
              >
                Sign In / Join as Customer
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

