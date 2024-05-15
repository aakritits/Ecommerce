import React from "react";
import products from "../products";

const Categories = () => {
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
  return (
    <div className="text-black flex flex-wrap gap-4 justify-center mt-6 mb-6"></div>
  );
};

export default Categories;
