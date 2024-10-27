import React from "react";
import { useCategory } from "../cartcontext/CategoryContext";
import products from "../products";
import Product from "./Product";

const CategoryItems = () => {
  const { selectedCategory } = useCategory();

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 flex justify-center">
        {selectedCategory} Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;
