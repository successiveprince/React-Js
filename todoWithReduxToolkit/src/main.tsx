import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
// @ts-ignore: module './app/store' has no declaration file (JS module)
import { store } from "./app/store.js";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
