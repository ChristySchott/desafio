import React, { useState, ChangeEvent } from 'react';

import { useSearch } from 'hooks/search';
import Container from './styles';

const Input: React.FC = () => {
  const { setSearch } = useSearch();

  const [inputValue, setInputValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleSearch() {
    setSearch(inputValue);
  }

  return (
    <Container>
      <input
        name="search"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleSearch}
        onKeyPress={handleSearch}
      />
      <button type="button" name="button-search" onClick={handleSearch}>
        Buscar
      </button>
    </Container>
  );
};

export default Input;
