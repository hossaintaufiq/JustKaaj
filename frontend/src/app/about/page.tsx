import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
              About Us
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Welcome to JustKaaj, your trusted service partner. We are dedicated to connecting 
                homeowners with reliable, professional service providers for all their home improvement needs.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our mission is to make home services accessible, transparent, and hassle-free. 
                Whether you need plumbing, painting, electrical work, or any other home service, 
                we connect you with vetted professionals who deliver quality work.
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                To become the leading platform for home services, where trust, quality, and 
                customer satisfaction are at the heart of everything we do.
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">
                Why Choose Us
              </h2>
              <ul className="list-disc list-inside text-gray-600 text-lg space-y-3 mb-6">
                <li>Verified and background-checked service providers</li>
                <li>Transparent pricing with no hidden fees</li>
                <li>24/7 customer support</li>
                <li>Quality guarantee on all services</li>
                <li>Easy booking and scheduling system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

