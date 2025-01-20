import React from "react";
import Product from "./Product";
import banner from "../images/banner.png";

const Shop = ({ filteredProducts }) => {
  return (
    <div>
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
          <h3 className="mt-2 text-[#F1CB26] transition-transform duration-300 transform hover:scale-110 text-lg sm:text-xl md:text-2xl">
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

      {/* Content Section with Sidebar and Product Grid */}
      <div className="p-4 flex gap-4 ">
        {/* Sidebar */}
        <div className="hidden lg:block w-1/4 bg-white p-6 rounded-lg shadow-lg sticky top-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Select Categories
          </h2>
          <ul className="space-y-4">
            <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 px-4 py-2 rounded-md transition duration-300">
              All Products
            </li>
            <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 px-4 py-2 rounded-md transition duration-300">
              Popular
            </li>
            <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 px-4 py-2 rounded-md transition duration-300">
              New Arrivals
            </li>
            <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 px-4 py-2 rounded-md transition duration-300">
              Best Sellers
            </li>
            <li className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 px-4 py-2 rounded-md transition duration-300">
              Sale
            </li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Product data={product} key={product.id} />
              ))
            ) : (
              <p className="text-center col-span-full">No products found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
