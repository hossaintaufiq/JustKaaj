"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheck, FaCalendar, FaUser, FaTools, FaShieldAlt, FaCreditCard, FaInfoCircle } from "react-icons/fa";
import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";
import { allCategories, categoryDetails, providersByCategory } from "../../categoriesData";

// Mock provider data - this will come from your backend


//  new interfaces applied 
interface Availability {
  day: string;
  time: string;
}

interface Review {
  user: string;
  rating: number;
  comment: string;
}

interface Provider {
  id: string;
  name: string;
  description: string;
  rating: number;
  experience: string;
  location: string;
  verified: boolean;
  responseTime: string;
  pricing: string;
  services: string[];
  availability: Availability[];
  reviews: Review[];
}


// new interfaces ends 
const getProviderData = (category: string, providerId: string) => {
  const providers = providersByCategory[category] || [];
  const provider = providers[parseInt(providerId) || 0] || providers[0];
  
  return {
    id: providerId,
    name: provider.name,
    description: provider.desc,
    rating: provider.rating,
    experience: provider.experience,
    location: provider.location,
    verified: provider.verified,
    responseTime: provider.responseTime,
    pricing: provider.pricing,
    // Additional fields for booking
    services: [
      "Professional Service",
      "Quality Guarantee",
      "On-time Delivery",
      "Free Consultation",
      "Warranty Included"
    ],
    availability: [
      { day: "Monday", time: "9:00 AM - 6:00 PM" },
      { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
      { day: "Wednesday", time: "9:00 AM - 6:00 PM" },
      { day: "Thursday", time: "9:00 AM - 6:00 PM" },
      { day: "Friday", time: "9:00 AM - 6:00 PM" },
      { day: "Saturday", time: "10:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    reviews: [
      { user: "Ahmed Khan", rating: 5, comment: "Excellent service, very professional and punctual." },
      { user: "Fatima Begum", rating: 5, comment: "Highly recommended! Quality work and fair pricing." },
      { user: "Rahim Ali", rating: 4, comment: "Good service, would use again." }
    ]
  };
};

export default function ServiceDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const category = decodeURIComponent(params.category as string);
  const providerId = params.providerId as string;

  const [provider, setProvider] = useState<Provider | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isBooking, setIsBooking] = useState(false);

  useEffect(() => {
    if (category && providerId) {
      const providerData = getProviderData(category, providerId);
      setProvider(providerData);
    }
  }, [category, providerId]);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooking(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would make the actual API call to your backend
    console.log("Booking submitted:", {
      providerId,
      category,
      selectedDate,
      selectedTime,
      serviceType,
      address,
      phone,
      notes
    });
    
    setIsBooking(false);
    // Redirect to confirmation page or show success message
    alert("Booking submitted successfully! We'll contact you soon.");
  };

  if (!provider) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading service details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><button onClick={() => router.push('/service')} className="hover:text-green-600">Services</button></li>
              <li>/</li>
              <li><button onClick={() => router.push(`/service?category=${encodeURIComponent(category)}`)} className="hover:text-green-600">{category}</button></li>
              <li>/</li>
              <li className="text-green-600 font-medium">{provider.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Provider Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Provider Header */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-2xl mr-4">
                      {
                      // provider.name.split(" ").map(n => n[0]).join("").toUpperCase()
                      // new code 
                      provider.name.split(" ").map((n: string) => n[0]).join("").toUpperCase()

                      }
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-1">{provider.name}</h1>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="mr-1" />
                          {provider.location}
                        </div>
                        <div className="flex items-center">
                          <FaClock className="mr-1" />
                          {provider.responseTime}
                        </div>
                        {provider.verified && (
                          <div className="flex items-center text-green-600">
                            <FaShieldAlt className="mr-1" />
                            Verified
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end mb-2">
                      {Array(5).fill(0).map((_, i) => (
                        <FaStar key={i} className={`w-4 h-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                      <span className="ml-2 text-sm font-medium text-gray-600">{provider.rating}</span>
                    </div>
                    <p className="text-sm text-gray-500">{provider.experience} experience</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{provider.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <FaTools className="mr-2 text-green-600" />
                    <span>Service Type: {category}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCreditCard className="mr-2 text-green-600" />
                    <span>Price Range: {provider.pricing}</span>
                  </div>
                </div>
              </div>

              {/* Services Offered */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Services Offered</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {provider.services.map((service: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Availability</h2>
                <div className="space-y-2">
                  {provider.availability.map((day:{ day:string,time:string}, index: number) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{day.day}</span>
                      <span className="text-gray-600">{day.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
                <div className="space-y-4">
                  {provider.reviews.map((review: { user: string; rating: number; comment: string }, index: number) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{review.user}</span>
                        <div className="flex items-center">
                          {Array(5).fill(0).map((_, i) => (
                            <FaStar key={i} className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Book This Service</h2>
                
                <form onSubmit={handleBooking} className="space-y-4">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaCalendar className="inline mr-1" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaClock className="inline mr-1" />
                      Preferred Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaTools className="inline mr-1" />
                      Service Type
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    >
                      <option value="">Select service type</option>
                      <option value="standard">Standard Service</option>
                      <option value="premium">Premium Service</option>
                      <option value="emergency">Emergency Service</option>
                    </select>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaMapMarkerAlt className="inline mr-1" />
                      Service Address
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your full address"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaPhone className="inline mr-1" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaInfoCircle className="inline mr-1" />
                      Additional Notes
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any special requirements or instructions"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isBooking}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    {isBooking ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      "Book Now"
                    )}
                  </button>
                </form>

                {/* Price Estimate */}
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">Price Estimate</h3>
                  <p className="text-sm text-green-700">{provider.pricing}</p>
                  <p className="text-xs text-green-600 mt-1">*Final price will be confirmed after booking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 