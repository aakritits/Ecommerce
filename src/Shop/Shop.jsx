import React, { useState } from "react";
import Product from "./Product";
import banner from "../images/banner.png";
import {
  FaStore,
  FaStar,
  FaNewspaper,
  FaTrophy,
  FaTag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import products from "../products";

const Shop = ({ filteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = [
    { id: "all", name: "All Products", icon: <FaStore size={20} /> },
    { id: "popular", name: "Popular", icon: <FaStar size={20} /> },
    { id: "new", name: "New Arrivals", icon: <FaNewspaper size={20} /> },
    { id: "bestsellers", name: "Best Sellers", icon: <FaTrophy size={20} /> },
    { id: "sale", name: "Sale", icon: <FaTag size={20} /> },
  ];

  const displayedProducts =
    selectedCategory === "all"
      ? products
      : filteredProducts.filter((product) => {
          if (selectedCategory === "popular") return product.popular;
          if (selectedCategory === "new") return product.newArrival;
          if (selectedCategory === "bestsellers") return product.review >= 4;
          if (selectedCategory === "sale") return product.price < 100;
          return false;
        });

  return (
    <div className=" flex flex-col gap-3">
      {/* Banner Section */}
      <div className="relative bg-contain bg-center md:h-[45vh] w-full flex flex-col md:flex-row gap-8 md:gap-32 items-center justify-center text-white text-4xl bg-gradient-to-r from-[#0da0de] via-[#1d4ed8] to-[#0da0de] font-bold overflow-hidden">
        <div className="flex-1"></div>
        <div className="text-center md:text-left">
          <h1 className="flex z-10 text-gray-200 hover:text-white transition duration-300 transform hover:scale-105 justify-center text-2xl sm:text-4xl md:text-5xl">
            Summer Sale!
          </h1>
          <h2 className="flex text-sm text-gray-200 mt-2 transition duration-300 opacity-80 hover:opacity-100 sm:text-base md:text-lg">
            Enjoy discounts on selected items
          </h2>
          <h3 className="mt-2 text-[#F1CB26] flex justify-center transition-transform duration-300 transform hover:scale-110 text-lg sm:text-xl md:text-2xl">
            GET 50% OFF
          </h3>
        </div>
        <div className="relative flex-1">
          <img
            src={banner}
            width={252}
            className="transform transition-transform duration-500 hover:scale-110 hover:rotate-3 mx-auto md:mx-0"
          />
          <div className="absolute inset-0 opacity-20 rounded-full "></div>
        </div>
      </div>
      {/* Responsive Filter */}
      {/* Sidebar Toggle Button */}
      <div className="flex justify-end items-center mr-4 mt-2">
        <button
          className="lg:hidden flex items-center gap-2 px-3 py-2 border border-gray-500 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FiFilter size={20} className="text-gray-700" />
          <span className="font-medium text-lg text-gray-800">Filters</span>
        </button>
      </div>

      <div className=" flex gap-4">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-20 w-3/4 max-w-xs bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 lg:static lg:w-1/4 lg:transform-none ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 pb-4 border-gray-200">
            Select Categories
          </h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category.id}
                className={`cursor-pointer hover:text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-md transition duration-200 ease-in-out transform hover:scale-105 flex items-center gap-3 ${
                  selectedCategory === category.id
                    ? "text-blue-500 bg-blue-50"
                    : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setIsSidebarOpen(false);
                }}
              >
                {category.icon}
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <Product data={product} key={product.id} />
              ))
            ) : (
              <p className="text-center col-span-full text-lg font-semibold">
                No products found!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
