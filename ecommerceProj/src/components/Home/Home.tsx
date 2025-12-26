import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-5">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-16 mb-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl text-white px-10">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
            Welcome to Our Store
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Discover amazing products at unbeatable prices
          </p>
          <Link
            to="/product"
            className="bg-white text-purple-600 px-10 py-4 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
          >
            Shop Now
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-white/20 rounded-3xl flex items-center justify-center text-8xl md:text-9xl backdrop-blur-sm">
            🛍️
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-center text-4xl md:text-5xl mb-10 text-gray-800 font-bold">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl mb-5">🚚</div>
            <h3 className="text-xl md:text-2xl mb-2 text-gray-800 font-semibold">
              Free Shipping
            </h3>
            <p className="text-gray-600">On orders over $50</p>
          </div>
          <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl mb-5">💳</div>
            <h3 className="text-xl md:text-2xl mb-2 text-gray-800 font-semibold">
              Secure Payment
            </h3>
            <p className="text-gray-600">100% secure transactions</p>
          </div>
          <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl mb-5">🔄</div>
            <h3 className="text-xl md:text-2xl mb-2 text-gray-800 font-semibold">
              Easy Returns
            </h3>
            <p className="text-gray-600">30-day return policy</p>
          </div>
          <div className="bg-white p-10 rounded-2xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl mb-5">⭐</div>
            <h3 className="text-xl md:text-2xl mb-2 text-gray-800 font-semibold">
              Quality Products
            </h3>
            <p className="text-gray-600">Handpicked collection</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-10 bg-gradient-to-r from-pink-400 to-pink-600 rounded-3xl text-white mb-10">
        <h2 className="text-4xl md:text-5xl mb-5 font-bold">
          Start Your Shopping Journey Today
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-95">
          Explore our wide range of products and enjoy seamless shopping
          experience!
        </p>
        <button className="bg-white text-pink-600 px-10 py-4 text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:-translate-y-0.5 hover:shadow-xl">
          Browse Products
        </button>
      </section>
    </main>
  );
}
