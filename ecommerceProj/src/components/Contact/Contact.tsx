import { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact Us - ShopHub";
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="w-full max-w-7xl mx-auto px-5 py-12">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 md:p-10 rounded-3xl text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:info@shophub.com"
                    className="hover:underline opacity-95"
                  >
                    info@shophub.com
                  </a>
                  <br />
                  <a
                    href="mailto:support@shophub.com"
                    className="hover:underline opacity-95"
                  >
                    support@shophub.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="hover:underline opacity-95"
                  >
                    +1 (234) 567-890
                  </a>
                  <br />
                  <span className="opacity-95">Mon-Fri 9:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="opacity-95">
                    123 Shopping Street
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Help */}
          <div className="bg-gray-100 p-8 md:p-10 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Quick Help
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-purple-600 hover:text-pink-600 font-medium transition-colors"
                >
                  📦 Track Your Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-600 hover:text-pink-600 font-medium transition-colors"
                >
                  🔄 Return & Exchange Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-600 hover:text-pink-600 font-medium transition-colors"
                >
                  ❓ Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-purple-600 hover:text-pink-600 font-medium transition-colors"
                >
                  🚚 Shipping Information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <section className="text-center">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Connect With Us
        </h3>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Facebook"
          >
            📘
          </a>
          <a
            href="#"
            className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Twitter"
          >
            🐦
          </a>
          <a
            href="#"
            className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Instagram"
          >
            📷
          </a>
          <a
            href="#"
            className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="LinkedIn"
          >
            💼
          </a>
        </div>
      </section>
    </main>
  );
}
