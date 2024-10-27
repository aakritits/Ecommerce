import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Shop from "./Shop/Shop";
import "./styles/design.css";
import Navbar from "./components/Navbar";
import ProductDetail from "./Shop/ProductDetail";
import CartPage from "./Shop/CartPage";
import ShippingDetails from "./Shop/ShippingDetails";
import Categories from "./Shop/Categories";
import CategoryItems from "./Shop/CategoryItems";
import { CategoryProvider } from "./cartcontext/CategoryContext";


const App = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  return (
    <div>
      <Router>
        <CategoryProvider>
          <div className="flex flex-col">
            <Navbar setFilteredProducts={setFilteredProducts} />
            <div className="flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={<Shop filteredProducts={filteredProducts} />}
                />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/shippingdetails" element={<ShippingDetails />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/category/:categoryName" element={<CategoryItems />} />
             

                <Route
                  path="*"
                  element={
                    <div className="text-center h-screen mt-16">
                      This Route is not available.
                    </div>
                  }
                />
              </Routes>
            </div>
          </div>
        </CategoryProvider>
      </Router>
    </div>
  );
};

export default App;
