export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Homeowner",
      rating: 5,
      text: "Excellent service from start to finish! The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommend!"
    },
    {
      name: "Michael Chen",
      title: "Property Owner",
      rating: 5,
      text: "They transformed our kitchen beautifully. The attention to detail and communication throughout the project was outstanding. Very satisfied!"
    },
    {
      name: "Emily Rodriguez",
      title: "Homeowner",
      rating: 5,
      text: "Best remodeling experience we've had. The team was respectful of our home, cleaned up daily, and delivered exactly what was promised. Thank you!"
    }
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 max-w-3xl mx-auto">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6 max-w-sm mx-auto">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex text-green-400 mb-2 sm:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

