import Image from 'next/image';

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Video/Image */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <div className="relative w-72 h-96 bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
              alt="How it works"
              fill
              className="object-cover rounded-2xl"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 bg-green-600 bg-opacity-80 rounded-full flex items-center justify-center">
                <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="24" fill="#22c55e" fillOpacity="0.7" />
                  <polygon points="20,16 34,24 20,32" fill="#fff" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/* Right: Steps */}
        <div className="flex-1 w-full max-w-xl">
          <div className="mb-2 text-green-700 font-semibold tracking-widest text-sm">HOW IT WORKS</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Easiest way to get a service</h2>
          <ol className="relative border-l-2 border-green-200 ml-6">
            <li className="mb-10 ml-6">
              <span className="absolute -left-7 flex items-center justify-center w-10 h-10 bg-green-500 rounded-full text-white font-bold text-lg">1</span>
              <h3 className="font-bold text-lg mb-1 text-gray-600">Select the Service</h3>
              <p className="text-gray-600">Pick the service you are looking for– from the website or the app.</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute -left-7 flex items-center justify-center w-10 h-10 bg-green-500 rounded-full text-white font-bold text-lg">2</span>
              <h3 className="font-bold text-lg mb-1 text-gray-600">Pick your schedule</h3>
              <p className="text-gray-600">Pick your convenient date and time to avail the service. Pick the service provider based on their rating.</p>
            </li>
            <li className="ml-6">
              <span className="absolute -left-7 flex items-center justify-center w-10 h-10 bg-green-500 rounded-full text-white font-bold text-lg">3</span>
              <h3 className="font-bold text-lg mb-1 text-gray-600">Place Your Order & Relax</h3>
              <p className="text-gray-600">Review and place the order. Now just sit back and relax. We&apos;ll assign the expert service provider&apos;s schedule for you.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
} 