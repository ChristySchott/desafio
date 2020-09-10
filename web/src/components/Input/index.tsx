import React from 'react';

import Container from './styles';

const Input: React.FC = () => {
  return (
    <Container>
      <input />
      <button type="submit" name="search">
        Buscar
      </button>
    </Container>
  );
};

export default Input;
