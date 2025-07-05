import { FaCheckCircle, FaClock, FaShieldAlt, FaSmile } from 'react-icons/fa';

const reasons = [
  { icon: <FaCheckCircle className="w-8 h-8 text-green-500" />, title: 'Trusted Professionals', desc: 'All our service providers are background-checked and highly rated.' },
  { icon: <FaClock className="w-8 h-8 text-green-500" />, title: 'Quick & Reliable', desc: 'Get fast, on-time service at your convenience.' },
  { icon: <FaShieldAlt className="w-8 h-8 text-green-500" />, title: 'Secure & Safe', desc: 'Your safety and privacy are our top priorities.' },
  { icon: <FaSmile className="w-8 h-8 text-green-500" />, title: 'Customer Satisfaction', desc: 'We strive for 100% satisfaction with every job.' },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-green-100 via-white to-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700 mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
              <div>{item.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-green-700">{item.title}</h3>
              <p className="text-gray-600 text-center mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 