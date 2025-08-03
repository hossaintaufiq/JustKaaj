import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F16] text-white px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 border-b border-gray-700 pb-6 sm:pb-8 lg:pb-10">
        {/* Logo + About */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="text-white text-lg sm:text-xl font-bold flex items-center mb-3 sm:mb-4">
            <span className="text-green-500">Just</span><span>Kaaj</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Stay updated with our latest service updates, helpful articles, and
            tips on getting the best service experience.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">Company</h4>
          <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2 text-gray-300">
            <li>
              <Link href="#" className="hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">Our Team</Link>
            </li>
          </ul>
        </div>

        {/* Know More Links */}
        <div>
          <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">Know More</h4>
          <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2 text-gray-300">
            <li>
              <Link href="#" className="hover:text-white transition-colors">Support</Link>
            </li>
            <li>
              <Link href="/privacy-policy-terms" className="hover:text-white transition-colors">Privacy Policy & Terms of Use</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">Newsletter</h4>
          <input
            type="email"
            placeholder="Email Goes here"
            className="w-full mb-2 sm:mb-3 px-3 sm:px-4 py-2 rounded-md bg-transparent border border-gray-500 text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-green-500"
          />
          <button className="bg-green-500 text-white px-4 sm:px-5 py-2 rounded-md text-xs sm:text-sm hover:bg-green-600 transition-colors">
            Send
          </button>
        </div>
      </div>

      <div className="text-center text-xs sm:text-sm text-gray-400 pt-4 sm:pt-6">
        2025 &ldquo;JustKaaj&rdquo; All Rights Reserved
      </div>
    </footer>
  );
}
