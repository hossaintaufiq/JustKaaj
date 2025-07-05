import HeroSection from "@/Component/Home/HeroSection";
import TestimonialSection from "@/Component/Home/TestimonialSection";
import Footer from "@/Component/Shared/Footer";
import Navbar from "@/Component/Shared/Navbar";
import BestForYouSection from "@/Component/Home/BestForYouSection";
import TrendingSection from "@/Component/Home/TrendingSection";
import FranchiseSection from "@/Component/Home/FranchiseSection";
import HowItWorksSection from "@/Component/Home/HowItWorksSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrendingSection />
      <BestForYouSection />
      <FranchiseSection />
      <HowItWorksSection />
      <TestimonialSection />
      {/* Location Section Start */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
          {/* Left: Text and Cities */}
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 leading-tight">Always at your service, right where you are</h2>
            <p className="text-gray-600 mb-6 text-lg">We won&apos;t let your cleaning and maintenance problems get to you. Besides providing quality home services in Bangladesh, our skilled pros can also tidy up your garden or clean your home or office anywhere in the country. Here are some of the main locations we serve:</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-lg font-semibold">
              <span className="text-green-700 hover:underline cursor-pointer">Dhaka</span>
              <span className="text-green-700 hover:underline cursor-pointer">Chittagong</span>
              <span className="text-green-700 hover:underline cursor-pointer">Khulna</span>
              <span className="text-green-700 hover:underline cursor-pointer">Rajshahi</span>
              <span className="text-green-700 hover:underline cursor-pointer">Sylhet</span>
              <span className="text-green-700 hover:underline cursor-pointer">Barisal</span>
              <span className="text-green-700 hover:underline cursor-pointer">Rangpur</span>
              <span className="text-green-700 hover:underline cursor-pointer">Mymensingh</span>
            </div>
          </div>
          {/* Right: Google Map */}
          <div className="flex-1 w-full h-[350px] min-w-[320px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Bangladesh Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.492839451236!2d90.4125183149606!3d23.8103329845617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7afc6b6b6b7%3A0x8c3b6b6b6b6b6b6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Location Section End */}
      <Footer />
    </div>
  );
} 