"use client";

import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaTools, FaUserMd, FaCar, FaCouch, FaHome, FaUserTie, FaLaptop, FaPlug, FaBug, FaPaintRoller, FaTruck, FaUserNurse, FaDog, FaUserShield, FaCamera, FaUtensils, FaChalkboardTeacher, FaDumbbell, FaBoxOpen, FaLock, FaBaby, FaLeaf, FaMusic, FaHandsHelping, FaMobileAlt, FaWater, FaRegBuilding, FaUser, FaBriefcase, FaSearch } from 'react-icons/fa';
import { allCategories, providersByCategory } from "./categoriesData";

const categoryIcons: Record<string, React.ReactNode> = {
  "AC Repair Services": <FaHome className="w-5 h-5" />,
  "Appliance Repair": <FaTools className="w-5 h-5" />,
  "Cleaning Services (Home, Office, Sofa, Carpet, etc.)": <FaCouch className="w-5 h-5" />,
  "Beauty & Wellness (At-home salon, spa, massage)": <FaUserTie className="w-5 h-5" />,
  "Men's Care & Salon": <FaUser className="w-5 h-5" />,
  "Health & Care (Nursing, physiotherapy, home doctor visits)": <FaUserMd className="w-5 h-5" />,
  "Electronics & Gadgets Repair": <FaLaptop className="w-5 h-5" />,
  "Electric & Plumbing": <FaPlug className="w-5 h-5" />,
  "Pest Control": <FaBug className="w-5 h-5" />,
  "Painting & Renovation": <FaPaintRoller className="w-5 h-5" />,
  "Shifting / Moving Services": <FaTruck className="w-5 h-5" />,
  "Driver Services": <FaCar className="w-5 h-5" />,
  "Car Care Services (Wash, detailing, repair)": <FaCar className="w-5 h-5" />,
  "Emergency Services (Locksmith, urgent repairs, ambulance)": <FaLock className="w-5 h-5" />,
  "Babysitting / Childcare": <FaBaby className="w-5 h-5" />,
  "Elderly Care / Attendant Services": <FaUserNurse className="w-5 h-5" />,
  "Laundry & Dry Cleaning": <FaBoxOpen className="w-5 h-5" />,
  "Handyman Services (Carpentry, drilling, minor repairs)": <FaTools className="w-5 h-5" />,
  "Gardening & Landscaping": <FaLeaf className="w-5 h-5" />,
  "Pet Care (Grooming, sitting, vet at home)": <FaDog className="w-5 h-5" />,
  "Makeup Artist Services": <FaUserTie className="w-5 h-5" />,
  "Security Guard / Watchman Services": <FaUserShield className="w-5 h-5" />,
  "CCTV Installation & Repair": <FaCamera className="w-5 h-5" />,
  "Water Purifier Services": <FaWater className="w-5 h-5" />,
  "Mobile & Laptop Repair at Home": <FaMobileAlt className="w-5 h-5" />,
  "Home Automation Services": <FaRegBuilding className="w-5 h-5" />,
  "Car Rental": <FaCar className="w-5 h-5" />,
  "Event Management": <FaHandsHelping className="w-5 h-5" />,
  "Photography & Videography": <FaCamera className="w-5 h-5" />,
  "Catering Services": <FaUtensils className="w-5 h-5" />,
  "Home Tutoring / Online Classes": <FaChalkboardTeacher className="w-5 h-5" />,
  "Fitness Trainer / Yoga at Home": <FaDumbbell className="w-5 h-5" />,
  "Interior Design & Home Decor": <FaPaintRoller className="w-5 h-5" />,
  "Courier / Document Delivery": <FaTruck className="w-5 h-5" />,
  "Party Decoration & Supplies": <FaBoxOpen className="w-5 h-5" />,
  "Tent & Stage Setup": <FaRegBuilding className="w-5 h-5" />,
  "Mehendi Artist": <FaHandsHelping className="w-5 h-5" />,
  "DJ & Sound System Rental": <FaMusic className="w-5 h-5" />,
  "Bouncer / Event Security": <FaUserShield className="w-5 h-5" />,
  "IT Support (WiFi setup, computer repair)": <FaLaptop className="w-5 h-5" />,
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ServicePage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);
  const [search, setSearch] = useState("");
  const menuRef = useRef<HTMLUListElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Filtered categories based on search
  const filteredCategories = allCategories.filter(cat =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard navigation for category menu
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const buttons = Array.from(menu.querySelectorAll("button"));
    const handleKeyDown = (e: KeyboardEvent) => {
      const idx = buttons.findIndex((btn) => btn === document.activeElement);
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const next = (idx + 1) % buttons.length;
        (buttons[next] as HTMLButtonElement).focus();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = (idx - 1 + buttons.length) % buttons.length;
        (buttons[prev] as HTMLButtonElement).focus();
      }
    };
    menu.addEventListener("keydown", handleKeyDown);
    return () => menu.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll to section on menu click
  const handleMenuClick = (cat: string) => {
    setSelectedCategory(cat);
    const id = slugify(cat);
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-2 text-center">All Services</h1>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Browse all our service categories and discover top providers for each.
          </p>
          {/* Search Bar */}
          <form className="flex justify-center mb-8" onSubmit={e => { e.preventDefault(); }}>
            <div className="flex w-full max-w-md">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search services..."
                className="flex-1 px-4 py-3 rounded-l-lg border-2 border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-lg transition bg-white shadow-sm"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-green-600 hover:bg-green-700 text-white rounded-r-lg font-bold text-lg flex items-center justify-center transition"
                aria-label="Search"
              >
                <FaSearch className="w-5 h-5" />
              </button>
            </div>
          </form>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left: Category Menu (classic style, highlight, keyboard nav) */}
            <aside
              className="w-full lg:w-1/3 lg:sticky lg:top-0 lg:h-screen h-fit lg:border-r lg:border-gray-200
                flex lg:block overflow-x-auto lg:overflow-y-auto lg:overflow-x-visible
                scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-green-50 scrollbar-thumb-rounded-full"
            >
              <ul
                ref={menuRef}
                className="flex lg:block gap-2 lg:gap-0 pb-2 lg:pb-0 w-full"
                role="listbox"
                aria-label="Service Categories"
              >
                {filteredCategories.map((cat) => (
                  <li key={cat} className="min-w-[70vw] sm:min-w-[220px] lg:min-w-0">
                    <button
                      className={`w-full text-left px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 border-2 text-sm sm:text-base ${selectedCategory === cat
                        ? "bg-green-100 border-green-500 text-green-800 shadow"
                        : "bg-white border-transparent hover:bg-green-50 text-gray-800"}`}
                      onClick={() => handleMenuClick(cat)}
                      aria-selected={selectedCategory === cat}
                      tabIndex={0}
                    >
                      {/* Icon: briefcase */}
                      <span className="inline-block align-middle mr-2 text-green-500">
                        {categoryIcons[cat] || <FaBriefcase className="w-4 h-4 sm:w-5 sm:h-5" />}
                      </span>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>
            {/* Right: All Providers by Category (anchor/scroll) */}
            <main className="lg:w-2/3 w-full">
              {filteredCategories.map((cat) => (
                <div
                  key={cat}
                  id={slugify(cat)}
                  ref={el => { sectionRefs.current[slugify(cat)] = el; }}
                  className="mb-8 sm:mb-12 scroll-mt-20 sm:scroll-mt-24"
                >
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-200
                      ${selectedCategory === cat
                      ? 'text-green-900 bg-green-100 border-l-4 border-green-500 px-3 py-2 rounded'
                      : 'text-green-700'}`}
                    tabIndex={-1}
                  >
                    {cat}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {providersByCategory[cat].map((provider, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col items-start transition-transform duration-200 hover:scale-[1.025] hover:shadow-lg border border-transparent hover:border-green-200 cursor-pointer"
                        onClick={() => router.push(`/service/${encodeURIComponent(cat)}/${idx}`)}
                      >
                        <div className="flex items-center mb-3 w-full">
                          {provider.photo ? (
                            <img
                              src={provider.photo}
                              alt={provider.name}
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-green-200 mr-3 flex-shrink-0"
                            />
                          ) : (
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-base sm:text-lg mr-3 flex-shrink-0">
                              {getInitials(provider.name)}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="text-base sm:text-lg font-bold text-green-700 leading-tight truncate">{provider.name}</h4>
                              {provider.verified && (
                                <span className="ml-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-semibold flex-shrink-0">Verified</span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-yellow-500 text-xs font-semibold mt-1">
                              {Array(Math.round(provider.rating)).fill(0).map((_, i) => (
                                <span key={i}>★</span>
                              ))}
                              <span className="text-gray-700 ml-1">{provider.rating.toFixed(1)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-700 text-xs sm:text-sm mb-2 w-full line-clamp-2">{provider.desc}</div>
                        <div className="flex flex-wrap gap-1 sm:gap-2 text-xs text-gray-600 mb-2 w-full">
                          <span className="bg-green-50 px-2 py-0.5 rounded">{provider.location}</span>
                          <span className="bg-green-50 px-2 py-0.5 rounded">{provider.experience} exp</span>
                          <span className="bg-green-50 px-2 py-0.5 rounded">{provider.pricing}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 w-full">
                          {provider.services && provider.services.map((service, i) => (
                            <span key={i} className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 