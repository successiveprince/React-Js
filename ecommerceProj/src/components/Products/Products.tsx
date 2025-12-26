import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { toast } from "react-toastify";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<string[]>([]);

  const { addToCart } = useCartContext();

  useEffect(() => {
    document.title = "Products - ShopHub";

    // Fetch products
    fetch("https://dummyjson.com/products?limit=50")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.products.map((p: Product) => p.category))
        );
        setCategories(uniqueCategories as string[]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1,
      stock: product.stock,
    });
    toast.success(`${product.title} added to cart!`);
  };

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-5 py-12 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">🔄</div>
          <p className="text-xl text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-5 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Our Products
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our curated collection of quality products
        </p>
      </section>

      {/* Search and Filter */}
      <section className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all cursor-pointer"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </section>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            No products found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-gray-100 overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {product.discountPercentage > 0 && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{Math.round(product.discountPercentage)}%
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-5">
                {/* Category & Rating */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-purple-600 font-medium uppercase">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-medium">{product.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Brand & Stock */}
                <div className="flex justify-between items-center mb-3 text-sm text-gray-600">
                  <span>Brand: {product.brand}</span>
                  <span
                    className={
                      product.stock > 20
                        ? "text-green-600"
                        : product.stock > 0
                        ? "text-orange-600"
                        : "text-red-600"
                    }
                  >
                    {product.stock > 0
                      ? `${product.stock} in stock`
                      : "Out of stock"}
                  </span>
                </div>

                {/* Price & Button */}
                <div className="flex justify-between items-center pt-3 border-t">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      ${product.price}
                    </div>
                    {product.discountPercentage > 0 && (
                      <div className="text-xs text-gray-400 line-through">
                        $
                        {(
                          product.price /
                          (1 - product.discountPercentage / 100)
                        ).toFixed(2)}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                    className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                      product.stock > 0
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:-translate-y-0.5 hover:shadow-lg"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {product.stock > 0 ? "Add to Cart" : "Sold Out"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
