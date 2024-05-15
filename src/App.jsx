import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Shop/Shop";
import "./styles/design.css";
import Navbar from "./components/Navbar";
import ProductDetail from "./Shop/ProductDetail";
import CartPage from "./Shop/CartPage";
import ShippingDetails from "./Shop/ShippingDetails";
import Footer from "./components/Footer";
import Categories from "./Shop/Categories";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shippingdetails" element={<ShippingDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="*"
            element={
              <div className="text-center h-screen mt-16">
                This Route is not available.
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
