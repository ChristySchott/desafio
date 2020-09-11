import React, { createContext, useContext, useState } from 'react';

interface CategoryContextData {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryContext = createContext<CategoryContextData>(
  {} as CategoryContextData,
);

const CategoryProvider: React.FC = ({ children }) => {
  const [category, setCategory] = useState('calcados');

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

function useCategory(): CategoryContextData {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useCategory must be used within an CategoryContext');
  }

  return context;
}

export { CategoryProvider, useCategory };
