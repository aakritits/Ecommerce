import React, { createContext, useContext, useState, useMemo } from "react";
import products from "../products";

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categoryFiltered = useMemo(() => {
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory, categoryFiltered }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
export default CategoryContext;
