import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { toast } from "react-toastify";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
  stock: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // This ensures cart is loaded when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
    toast.info("Item removed from cart");
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    toast.info("Cart cleared");
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, Math.min(quantity, item.stock)) }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within CartProvider");
  }
  return context;
};
