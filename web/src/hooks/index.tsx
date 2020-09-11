import React from 'react';

import { FilterProvider } from './filter';
import { CategoryProvider } from './category';
import { ColorProvider } from './color';

const AppProvider: React.FC = ({ children }) => {
  return (
    <CategoryProvider>
      <FilterProvider>
        <ColorProvider>{children}</ColorProvider>
      </FilterProvider>
    </CategoryProvider>
  );
};

export default AppProvider;
