export default function Hero() {
  return (
    <section id="home" className="bg-white py-12 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 max-w-2xl mx-auto md:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Whether it&apos;s your home that needs remodeling
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl">
              We provide professional home remodeling services with a commitment to quality and customer satisfaction. 
              Our experienced team is ready to transform your space into your dream home.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto">
                Get a Quote
              </button>
              <button className="bg-white border-2 border-gray-300 hover:border-green-400 text-gray-700 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto">
                Learn More
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2">
              <div className="flex text-green-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm sm:text-base">Based on 100+ reviews</span>
            </div>
          </div>
          <div className="relative order-1 md:order-2 max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 bg-green-100 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6 -z-10"></div>
            <div className="relative bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden aspect-square w-full">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
                <div className="text-center text-white p-4 sm:p-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm">Professional Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

