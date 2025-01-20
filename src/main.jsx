import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./cartcontext/CartContext";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';


import "tailwindcss/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MantineProvider>
  </React.StrictMode>
);
