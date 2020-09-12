import React, { createContext, useContext, useState } from 'react';

interface FilterContextData {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

const FilterProvider: React.FC = ({ children }) => {
  const [filter, setFilter] = useState('');

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

function useFilter(): FilterContextData {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilter must be used within an FilterContext');
  }

  return context;
}

export { FilterProvider, useFilter };
