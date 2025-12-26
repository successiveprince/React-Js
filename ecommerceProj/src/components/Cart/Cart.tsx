import { useEffect } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } =
    useCartContext();

  useEffect(() => {
    document.title = "Shopping Cart - ShopHub";
  }, []);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto px-5 py-12 min-h-screen">
        <div className="text-center py-16">
          <div className="text-8xl mb-6">🛒</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/product"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-5 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Shopping Cart
        </h1>
        <p className="text-gray-600">
          You have {cart.length} {cart.length === 1 ? "item" : "items"} in your
          cart
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Product Image */}
                <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-purple-600">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors p-2"
                      aria-label="Remove item"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 font-medium">Quantity:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-bold transition-colors"
                      >
                        −
                      </button>
                      <span className="w-12 text-center font-semibold text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        disabled={item.quantity >= item.stock}
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors ${
                          item.quantity >= item.stock
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({item.stock} available)
                    </span>
                  </div>

                  {/* Subtotal */}
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="text-xl font-bold text-gray-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Clear Cart Button */}
          <button
            onClick={clearCart}
            className="w-full py-3 border-2 border-red-500 text-red-500 rounded-xl font-semibold hover:bg-red-50 transition-colors"
          >
            Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="opacity-90">Subtotal</span>
                <span className="font-semibold">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-90">Shipping</span>
                <span className="font-semibold">
                  {getCartTotal() > 50 ? "FREE" : "$10.00"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-90">Tax (10%)</span>
                <span className="font-semibold">
                  ${(getCartTotal() * 0.1).toFixed(2)}
                </span>
              </div>
              <div className="border-t border-white/30 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">Total</span>
                  <span className="text-3xl font-bold">
                    $
                    {(
                      getCartTotal() +
                      (getCartTotal() > 50 ? 0 : 10) +
                      getCartTotal() * 0.1
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {getCartTotal() < 50 && (
              <div className="bg-white/20 rounded-lg p-3 mb-6 text-sm">
                <p className="font-medium">
                  Add ${(50 - getCartTotal()).toFixed(2)} more for FREE
                  shipping!
                </p>
              </div>
            )}

            <button className="w-full bg-white text-purple-600 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl mb-3">
              Proceed to Checkout
            </button>

            <Link
              to="/product"
              className="block text-center text-white hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
