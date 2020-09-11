import React, { createContext, useContext, useState, useEffect } from 'react';
import api from 'services/api';

interface CategoriesList {
  id: number;
  name: string;
  path: string;
}

interface CategoryContextData {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  categoriesList: CategoriesList[];
}

const CategoryContext = createContext<CategoryContextData>(
  {} as CategoryContextData,
);

const CategoryProvider: React.FC = ({ children }) => {
  const [category, setCategory] = useState('calcados');
  const [categoriesList, setCategoriesList] = useState<CategoriesList[]>([]);

  useEffect(() => {
    async function loadCategories(): Promise<void> {
      const response = await api.get('list');
      setCategoriesList(response.data);
    }

    loadCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
        categoriesList,
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
