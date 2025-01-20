import React from "react";
import Product from "./Product";
import mainbanner from "../images/mainbanner.webp";
import banner from "../images/banner.png";

const Shop = ({ filteredProducts }) => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative bg-contain bg-center h-[45vh] w-full flex gap-32 items-center justify-center text-white text-4xl bg-gradient-to-r from-[#0da0de] via-[#1d4ed8] to-[#0da0de] font-bold overflow-hidden">
        <div></div>
        <div className="text-center">
          <h1 className="flex z-10 text-gray-200 hover:text-white transition duration-300 transform hover:scale-105">
            Summer Sale!
          </h1>
          <h2 className="flex text-sm text-gray-200 mt-2 transition duration-300 opacity-80 hover:opacity-100">
            Enjoy discounts on selected items
          </h2>
          <h3 className="mt-2 text-[#F1CB26] transition-transform duration-300 transform hover:scale-110">
            GET 50% OFF
          </h3>
        </div>
        <div className="relative">
          <img
            src={banner}
            width={252}
            className="transform transition-transform duration-500 hover:scale-110 hover:rotate-3"
          />
          <div className="absolute inset-0 opacity-20 rounded-full "></div>
        </div>
      </div>

      {/* Content Section with Sidebar and Product Grid */}
      <div className="p-4 flex gap-4 ">
        {/* Sidebar */}
        <div className="hidden lg:block w-1/4 bg-gray-100 p-4 rounded-lg shadow-lg sticky">
          <h2 className="text-xl font-semibold mb-4">Select Categories</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-blue-500">All Products</li>
            <li className="cursor-pointer hover:text-blue-500">Popular</li>
            <li className="cursor-pointer hover:text-blue-500">New Arrivals</li>
            <li className="cursor-pointer hover:text-blue-500">Best Sellers</li>
            <li className="cursor-pointer hover:text-blue-500">Sale</li>
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
