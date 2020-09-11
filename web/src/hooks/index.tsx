import React from 'react';

import { FilterProvider } from './filter';
import { CategoryProvider } from './category';

const AppProvider: React.FC = ({ children }) => {
  return (
    <CategoryProvider>
      <FilterProvider>{children}</FilterProvider>
    </CategoryProvider>
  );
};

export default AppProvider;
