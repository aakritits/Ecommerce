import React, { useState, useEffect } from "react";
import Product from "./Product";
import { useCategory } from "../cartcontext/CategoryContext";
import Fuse from "fuse.js";
import products from "../products";

const Shop = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const fuseOptions = {
    keys: ["name", "category"],
    includeScore: true,
    threshold: 0.5,
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
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearCategory = () => {
    setSelectedCategory("");
  };

  return (
    <div className="m-4">
      <div className="flex items-center mb-4 space-x-2 sm:space-x-3 md:space-x-4">
        <input
          type="text"
          className="py-2 px-3 sm:px-4 w-full sm:w-auto border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition duration-300"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {selectedCategory && (
          <button
            onClick={clearCategory}
            className="bg-gray-500 text-white rounded-full py-2 px-2 sm:px-4 hover:bg-gray-600 focus:outline-none focus:bg-gray-700 transition duration-300"
          >
            Remove {selectedCategory}
          </button>
        )}
      </div>

      <div className="flex flex-wrap">
        {filteredProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
