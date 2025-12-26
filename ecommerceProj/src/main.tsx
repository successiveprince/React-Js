import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "./context/CartContext.tsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Product from "./components/Products/Products.tsx";
import Cart from "./components/Cart/Cart.tsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={route} />
    </CartProvider>
  </StrictMode>
);
