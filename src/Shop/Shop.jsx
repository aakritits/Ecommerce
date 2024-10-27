import React from "react";
import Product from "./Product";
import mainbanner from "../images/mainbanner.webp";

const Shop = ({ filteredProducts }) => {
  return (
    <div>
      <div
        className="relative bg-contain bg-center h-[40vh] w-full flex items-center justify-center text-white text-4xl font-bold"
        style={{ backgroundImage: `url(${mainbanner})` }}
      >
        <div className="bg-black inset-0 opacity-30"></div>
        <h1 className="absolute z-10">Shop Our Products</h1>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product data={product} key={product.id} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
