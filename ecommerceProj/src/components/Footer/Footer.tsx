import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🛒</span>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ShopHub
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              Your one-stop destination for quality products at unbeatable
              prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-purple-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-purple-400 transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-purple-400 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-sm hover:text-purple-400 transition-colors duration-300"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-purple-400 transition-colors duration-300"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-purple-400 transition-colors duration-300"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-purple-400 transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-purple-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <span>📧</span>
                <a
                  href="mailto:info@shophub.com"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  info@shophub.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span>📞</span>
                <a
                  href="tel:+1234567890"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span>📍</span>
                <span>123 Shopping St, Noida 201303</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <span>📘</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <span>🐦</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <span>📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <span>💼</span>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400">
              &copy; {currentYear} ShopHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
