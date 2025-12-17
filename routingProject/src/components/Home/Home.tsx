import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[600px] text-center py-20">
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-orange-700">React Router</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl">
          Build modern single-page applications with seamless navigation
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="/about"
            className="px-8 py-4 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300 shadow-lg"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-orange-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Fast Performance
            </h3>
            <p className="text-gray-600">
              Lightning-fast navigation with optimized routing and lazy loading
              capabilities.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-orange-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Easy to Use
            </h3>
            <p className="text-gray-600">
              Simple and intuitive API that makes building complex applications
              a breeze.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-orange-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Secure & Reliable
            </h3>
            <p className="text-gray-600">
              Built with security best practices and battle-tested by millions
              of developers.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-center">
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of developers building amazing applications
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-orange-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
