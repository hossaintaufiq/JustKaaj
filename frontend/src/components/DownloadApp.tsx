export default function DownloadApp() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-semibold text-green-500 mb-2">Download Our App</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tackle your to-do list wherever you are
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Get our mobile app and make your life easy. Book trusted pros, manage jobs, and stay updated on the go.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <span className="text-left leading-tight">
                <span className="block text-xs">Download on the</span>
                <span className="block text-lg font-semibold">App Store</span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <span className="text-left leading-tight">
                <span className="block text-xs">Get it on</span>
                <span className="block text-lg font-semibold">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

