import React from 'react';

import { FilterProvider } from './filter';

const AppProvider: React.FC = ({ children }) => {
  return <FilterProvider>{children}</FilterProvider>;
};

export default AppProvider;
