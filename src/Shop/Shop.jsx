import React, { useState } from "react";
import Product from "./Product";
import products from "../products";

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

  // State to keep track of checked categories
  const [checkedCategories, setCheckedCategories] = useState([]);

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

  // Filter products based on checked categories
  const filteredProducts =
    checkedCategories.length > 0
      ? products.filter((product) =>
          checkedCategories.includes(product.category)
        )
      : products;

  return (
    <div className="m-4">
      <span className="font-semibold">Filter by Categories</span>
      <div className="grid grid-cols-2 max-w-md mt-2 gap-1">
        {categories.map((category) => {
          return (
            <label key={category}>
              <input
                type="checkbox"
                onChange={handleChecked(category)}
                checked={checkedCategories.includes(category)}
              />{" "}
              {category}
            </label>
          );
        })}
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
