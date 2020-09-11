import React from 'react';

import { FilterProvider } from './filter';
import { CategoryProvider } from './category';
import { ColorProvider } from './color';
import { CartProvider } from './cart';

const AppProvider: React.FC = ({ children }) => {
  return (
    <CategoryProvider>
      <FilterProvider>
        <ColorProvider>
          <CartProvider>{children}</CartProvider>
        </ColorProvider>
      </FilterProvider>
    </CategoryProvider>
  );
};

export default AppProvider;
