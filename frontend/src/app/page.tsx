import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AboutFounder from '@/components/AboutFounder';
import CTABanner from '@/components/CTABanner';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import ReadyToStart from '@/components/ReadyToStart';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AboutFounder />
      <CTABanner />
      <Services />
      <HowItWorks />
      <Testimonials />
      <ReadyToStart />
      <Footer />
    </main>
  );
}
