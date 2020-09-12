import React from 'react';

import { FilterProvider } from './filter';
import { ColorProvider } from './color';
import { CartProvider } from './cart';

const AppProvider: React.FC = ({ children }) => {
  return (
    <FilterProvider>
      <ColorProvider>
        <CartProvider>{children}</CartProvider>
      </ColorProvider>
    </FilterProvider>
  );
};

export default AppProvider;
