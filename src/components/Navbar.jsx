import React, { useState, useEffect } from "react";
import { ShoppingCart, HouseLine } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import Fuse from "fuse.js";
import products from "../products";
import { useCategory } from "../cartcontext/CategoryContext";
import { useCart } from "../cartcontext/CartContext";

function Navbar({ setFilteredProducts }) {
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory } = useCategory();
  const { cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const fuseOptions = {
    keys: ["name", "category"],
    includeScore: true,
    threshold: 0.5,
  };

  const resetCategory = () => {
    setSelectedCategory(null); // Reset the selected category
    setFilteredProducts(products); // Show all products when no category is selected
  };

  useEffect(() => {
    let activeProducts = products;

    if (selectedCategory) {
      activeProducts = products.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm) {
      const fuse = new Fuse(activeProducts, fuseOptions);
      const results = fuse.search(searchTerm);
      setFilteredProducts(results.map((result) => result.item));
    } else {
      setFilteredProducts(activeProducts);
    }
  }, [searchTerm, selectedCategory, setFilteredProducts]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="sticky top-0 bg-white py-4 px-4 flex items-center justify-between z-50">
      <div className="flex gap-4 items-center text-black">
        <Link
          to="/"
          className="text-black text-lg font-bold"
          onClick={resetCategory}
        >
          <HouseLine size={32} />
        </Link>

        <div className="relative group focus-within">
          <Link
            to="/categories"
            className="text-black flex items-center gap-2 hover:text-blue-500 transition duration-300 transform hover:scale-105"
          >
            <BiCategory
              size={20}
              className="transition-transform duration-300 hover:rotate-90"
            />
            Shop by categories
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <input
          type="text"
          className="py-2 px-6 w-44 sm:w-60 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <Link
          to="/cart"
          className="text-black text-lg font-bold relative group"
        >
          <ShoppingCart
            size={32}
            className="transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500"
          />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1 transform translate-x-1 -translate-y-1 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
