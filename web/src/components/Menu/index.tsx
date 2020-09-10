import React from 'react';

import Container from './styles';

interface MenuProps {
  open: boolean;
}

const Menu: React.FC<MenuProps> = ({ open }) => {
  return (
    <Container open={open}>
      <div>
        <a href="/">Página inicial</a>
        <a href="/">Camisetas</a>
        <a href="/">Calças</a>
        <a href="/">Sapatos</a>
        <a href="/">Contato</a>
      </div>
    </Container>
  );
};
export default Menu;
