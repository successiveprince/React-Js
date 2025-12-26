import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Cart", path: "/cart" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🛒</span>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ShopHub
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-lg font-medium transition-all duration-300 relative pb-1 ${
                      isActive(item.path)
                        ? "text-purple-600"
                        : "text-gray-700 hover:text-purple-600"
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-full"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Login Icon */}
            <Link
              to="#"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Login"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="font-medium">Login</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
