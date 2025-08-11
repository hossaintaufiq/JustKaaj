import Navbar from "@/Component/Shared/Navbar";
import Footer from "@/Component/Shared/Footer";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "10 Essential Tips for Maintaining a Clean Home",
      excerpt: "Discover the best practices for keeping your home clean and organized with these proven tips and tricks.",
      author: "JustKaaj Team",
      date: "December 15, 2024",
      category: "Cleaning Tips",
      readTime: "5 min read",
      image: "🏠"
    },
    {
      title: "The Benefits of Professional Office Cleaning Services",
      excerpt: "Learn how professional cleaning services can improve productivity and create a healthier work environment.",
      author: "Sarah Johnson",
      date: "December 12, 2024",
      category: "Business",
      readTime: "7 min read",
      image: "🏢"
    },
    {
      title: "Eco-Friendly Cleaning Solutions for Your Business",
      excerpt: "Explore sustainable cleaning options that are good for your business and the environment.",
      author: "Mike Chen",
      date: "December 10, 2024",
      category: "Sustainability",
      readTime: "6 min read",
      image: "🌱"
    },
    {
      title: "Event Planning: From Setup to Cleanup",
      excerpt: "A comprehensive guide to successful event management including professional cleanup services.",
      author: "Emily Davis",
      date: "December 8, 2024",
      category: "Events",
      readTime: "8 min read",
      image: "🎉"
    },
    {
      title: "Maintenance Checklist for Property Managers",
      excerpt: "Essential maintenance tasks that every property manager should include in their routine.",
      author: "David Wilson",
      date: "December 5, 2024",
      category: "Maintenance",
      readTime: "10 min read",
      image: "🔧"
    },
    {
      title: "Landscaping Trends for 2025",
      excerpt: "Stay ahead of the curve with these emerging landscaping trends and design ideas.",
      author: "Lisa Thompson",
      date: "December 3, 2024",
      category: "Landscaping",
      readTime: "9 min read",
      image: "🌿"
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                JustKaaj Blog
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Insights, tips, and industry knowledge to help you make the most of our services 
                and maintain your spaces effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center text-4xl">
                    {post.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors">
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="bg-green-600 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-green-100 mb-8">
              Subscribe to our newsletter for the latest tips, industry insights, and service updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
} 