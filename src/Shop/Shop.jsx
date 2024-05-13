import React, { useState } from "react";
import Product from "./Product";
import products from "../products";
import Fuse from "fuse.js";

const Shop = () => {
  const categories = [
    "Fitness",
    "Fashion",
    "Home & Garden",
    "Electronics",
    "Travel",
    "Groceries",
    "Furniture",
    "Kitchenware",
  ];

  const [checkedCategories, setCheckedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const fuseOptions = {
    keys: ["name", "category"],
    includeScore: true,
    threshold: 0.5,
  };

  const fuse = new Fuse(products, fuseOptions);

  let filteredProducts =
    checkedCategories.length > 0
      ? products.filter((product) =>
          checkedCategories.includes(product.category)
        )
      : products;

  if (searchTerm) {
    const results = fuse.search(searchTerm);
    filteredProducts = results.map((result) => result.item);
  }

  const handleChecked = (category) => (event) => {
    const newCategories = event.target.checked
      ? [...checkedCategories, category]
      : checkedCategories.filter((item) => item !== category);
    setCheckedCategories(newCategories);
  };

  return (
    <div className="m-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="py-1 px-8 border-2 rounded-full"
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="relative ml-4">
          <button
            className="bg-gray-900 py-1 px-3 rounded-full text-white text-sm md:text-base lg:px-6 lg:py-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 transition duration-150 ease-in-out"
            onClick={() => setDropdownOpen(true)}
          >
            Filter by Categories
          </button>

          {dropdownOpen && (
            <div
              className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {categories.map((category) => (
                <label key={category} className="block p-2 hover:bg-gray-100">
                  <input
                    type="checkbox"
                    onChange={handleChecked(category)}
                    checked={checkedCategories.includes(category)}
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
            </div>
          )}
        </div>
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
