import React from 'react';

import { FilterProvider } from './filter';
import { ColorProvider } from './color';
import { CartProvider } from './cart';
import { SearchProvider } from './search';

const AppProvider: React.FC = ({ children }) => {
  return (
    <FilterProvider>
      <ColorProvider>
        <CartProvider>
          <SearchProvider>{children}</SearchProvider>
        </CartProvider>
      </ColorProvider>
    </FilterProvider>
  );
};

export default AppProvider;
