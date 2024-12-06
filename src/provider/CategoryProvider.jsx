import { createContext, useContext, useState, useEffect } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  // Initialize categories from LocalStorage (lazy initialization)
  const [categories, setCategories] = useState(() => {
    const storedCategories = localStorage.getItem("categories");
    try {
      return storedCategories ? JSON.parse(storedCategories) : [];
    } catch (e) {
      console.error("Error parsing categories from localStorage", e);
      return []; // Return an empty array if there's an issue
    }
  });

  // Sync categories with LocalStorage whenever they change
  useEffect(() => {
    if (categories.length > 0) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
