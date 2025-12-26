import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - ShopHub";
  }, []);

  return (
    <main className="w-full max-w-7xl mx-auto px-5 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          About ShopHub
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We're more than just an online store - we're your trusted partner in
          finding quality products at unbeatable prices.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 md:p-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            At ShopHub, our mission is to provide customers with a seamless
            shopping experience, offering a curated selection of high-quality
            products at competitive prices. We believe in making online shopping
            simple, secure, and enjoyable for everyone.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Quality First
            </h3>
            <p className="text-gray-600">
              We handpick every product to ensure it meets our high standards of
              quality and value.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4">💙</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Customer Focus
            </h3>
            <p className="text-gray-600">
              Your satisfaction is our priority. We're here to provide
              exceptional service every step of the way.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Sustainability
            </h3>
            <p className="text-gray-600">
              We're committed to eco-friendly practices and sustainable sourcing
              for a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="bg-gray-100 rounded-3xl p-10 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                10K+
              </div>
              <p className="text-gray-600 font-medium">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                5K+
              </div>
              <p className="text-gray-600 font-medium">Products</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                50+
              </div>
              <p className="text-gray-600 font-medium">Countries</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                99%
              </div>
              <p className="text-gray-600 font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Join Our Journey
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We're constantly growing and improving. Thank you for being part of
          our story. Together, we're building something special.
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 text-lg font-semibold rounded-full hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
          Start Shopping
        </button>
      </section>
    </main>
  );
}
