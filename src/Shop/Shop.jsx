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

  // Options for Fuse
  const fuseOptions = {
    keys: ["name", "description"], // Attributes to include in the search
    includeScore: true, // Include score in the result (optional)
    threshold: 0.3, // Tolerance of the search
  };

  // Create a new instance of Fuse
  const fuse = new Fuse(products, fuseOptions);

  // Filter products based on checked categories
  let filteredProducts =
    checkedCategories.length > 0
      ? products.filter((product) =>
          checkedCategories.includes(product.category)
        )
      : products;

  // Apply search using fuse.js
  if (searchTerm) {
    const results = fuse.search(searchTerm);
    filteredProducts = results.map((result) => result.item);
  }

  // Handle change on checkboxes
  const handleChecked = (category) => (event) => {
    if (event.target.checked) {
      setCheckedCategories([...checkedCategories, category]);
    } else {
      setCheckedCategories(
        checkedCategories.filter((item) => item !== category)
      );
    }
  };

  return (
    <div className="m-4">
      <input
        type="text"
        className=" py-1 mt-4 mb-4 block border-2 rounded-lg px-2"
        placeholder="Search for an item"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span className="font-semibold">Filter by Categories</span>

      <div className="grid grid-cols-2 max-w-md mt-2 gap-1">
        {categories.map((category) => (
          <label key={category}>
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

      <div className="flex flex-wrap">
        {filteredProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
