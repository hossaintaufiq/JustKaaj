export default function AboutFounder() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-2 md:order-1 max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 bg-green-100 rounded-2xl sm:rounded-3xl transform -rotate-3 sm:-rotate-6 -z-10"></div>
            <div className="relative bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden aspect-square w-full">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600">
                <div className="text-center text-white p-4 sm:p-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm">Expert Team</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 max-w-2xl mx-auto md:mx-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              About Founder&apos;s
            </h2>
            <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base max-w-xl">
              With years of experience in the home remodeling industry, our founder has built a reputation 
              for excellence and integrity. We started with a simple mission: to provide homeowners with 
              reliable, high-quality remodeling services that transform their living spaces.
            </p>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base max-w-xl">
              <strong>James B. Owner</strong> brings a wealth of knowledge and a passion for craftsmanship 
              to every project. Under his leadership, we&apos;ve completed hundreds of successful projects, 
              earning the trust and satisfaction of homeowners throughout the region.
            </p>
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

