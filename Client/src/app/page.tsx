"use client";
import HeroSection from "@/Component/Home/HeroSection";
import TestimonialSection from "@/Component/Home/TestimonialSection";
import Footer from "@/Component/Shared/Footer";
import Navbar from "@/Component/Shared/Navbar";
import BestForYouSection from "@/Component/Home/BestForYouSection";
import TrendingSection from "@/Component/Home/TrendingSection";
import FranchiseSection from "@/Component/Home/FranchiseSection";
import HowItWorksSection from "@/Component/Home/HowItWorksSection";
import { useState } from "react";

// import { useState } from "react";

export default function Home() {

  // new code started
  const locations : { [key: string]: string }= {
    "Basundhara R/A": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902930542826!2d90.42332591536382!3d23.81032709235524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d13ab3d9fb%3A0x1234567890abcdef!2sBashundhara%20R/A!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd",
    "Uttora": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.167057947812!2d90.39865011536393!3d23.87505139225471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c58a0c3c09b7%3A0xabcdef1234567890!2sUttara!5e0!3m2!1sen!2sbd!4v1680000000001!5m2!1sen!2sbd",
    "Gulshan": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.113270681906!2d90.41629131536387!3d23.79249679227576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ab3f2e123f%3A0x9876543210abcdef!2sGulshan!5e0!3m2!1sen!2sbd!4v1680000000002!5m2!1sen!2sbd",
    "Banani": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.030070415891!2d90.40471331536388!3d23.79284439227569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bcd7c9e9f5%3A0xabcdef9876543210!2sBanani!5e0!3m2!1sen!2sbd!4v1680000000003!5m2!1sen!2sbd",
    "Badda": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.050301625662!2d90.42688831536384!3d23.780240792278747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abc8f1234%3A0xfedcba0987654321!2sBadda!5e0!3m2!1sen!2sbd!4v1680000000004!5m2!1sen!2sbd",
    "Dhanmondi": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.503123456789!2d90.37321331536385!3d23.74567929228563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abc8f5678%3A0x1234567890fedcba!2sDhanmondi!5e0!3m2!1sen!2sbd!4v1680000000005!5m2!1sen!2sbd",
    "Mirpur": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.712345678901!2d90.35321331536382!3d23.822112392268123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abc8f9abc%3A0xabcdefabcdefabcd!2sMirpur!5e0!3m2!1sen!2sbd!4v1680000000006!5m2!1sen!2sbd",
  };

  const [mapUrl, setMapUrl] = useState(locations["Basundhara R/A"]);


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
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 leading-tight">
              Always at your service, right where you are
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              We will not let your cleaning and maintenance problems get to you. Besides providing quality home services in Bangladesh, our skilled pros can also tidy up your garden or clean your home or office anywhere in the country. Here are some of the main locations we serve:
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-lg font-semibold">
              {Object.keys(locations).map((loc) => (
                <span
                  key={loc}
                  onClick={() => setMapUrl(locations[loc])}
                  className="text-green-700 hover:underline cursor-pointer"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="flex-1 w-full h-[350px] min-w-[320px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Bangladesh Map"
              src={mapUrl}
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