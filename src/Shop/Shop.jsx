import React, { useState } from "react";
import Product from "./Product";
import { useCategory } from "../cartcontext/CategoryContext";
import Fuse from "fuse.js";

const Shop = () => {
  const { categoryFiltered } = useCategory();
  const [searchTerm, setSearchTerm] = useState("");
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  const fuseOptions = {
    keys: ["name", "category"],
    includeScore: true,
    threshold: 0.5,
  };

  let filteredProducts = searchTerm
    ? new Fuse(categoryFiltered, fuseOptions)
        .search(searchTerm)
        .map((result) => result.item)
    : categoryFiltered;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="m-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="py-1 px-2 md:px-8 border-2 rounded-full"
          placeholder="Search.."
          value={searchTerm}
          onChange={handleSearchChange}
        />
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
