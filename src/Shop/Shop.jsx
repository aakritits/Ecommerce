import React from "react";
import Product from "./Product";
import mainbanner from "../images/mainbanner.webp";
import banner from "../images/banner.png";

const Shop = ({ filteredProducts }) => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative bg-contain bg-center h-[40vh] w-full flex flex-between gap-32 items-center justify-center text-white text-4xl bg-[#0da0de] font-bold">
        <div></div>
        <div className="">
          <h1 className="flex z-10 text-gray-200">Summer Sale!</h1>
          <h2 className="flex text-sm text-gray-200 mt-2">
            Enjoy discounts on selected items
          </h2>
          <h3 className="mt-2 text-[#F1CB26]">GET 50% OFF</h3>
        </div>
        <div>
          <img src={banner} width={252} />
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
