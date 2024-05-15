import React, { createContext, useContext, useState, useMemo } from "react";

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
export default CategoryContext;
