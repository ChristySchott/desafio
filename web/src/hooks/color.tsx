import React, { createContext, useContext, useState } from 'react';

interface ColorContextData {
  colorToFilter: string;
  setColorToFilter: React.Dispatch<React.SetStateAction<string>>;
}

const ColorContext = createContext<ColorContextData>({} as ColorContextData);

const ColorProvider: React.FC = ({ children }) => {
  const [colorToFilter, setColorToFilter] = useState('');

  return (
    <ColorContext.Provider
      value={{
        colorToFilter,
        setColorToFilter,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

function useColorFilter(): ColorContextData {
  const context = useContext(ColorContext);

  if (!context) {
    throw new Error('useColorFilter must be used within an ColorContext');
  }

  return context;
}

export { ColorProvider, useColorFilter };
