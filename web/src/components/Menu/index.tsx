import React from 'react';

import Container from './styles';

interface MenuProps {
  open: boolean;
}

const Menu: React.FC<MenuProps> = ({ open }) => {
  return (
    <Container open={open}>
      <ul>
        <li>
          <a href="/">Página inicial</a>
        </li>
        <li>
          <a href="/">Camisetas</a>
        </li>
        <li>
          <a href="/">Calças</a>
        </li>
        <li>
          <a href="/">Sapatos</a>
        </li>
        <li>
          <a href="/">Contato</a>
        </li>
      </ul>
    </Container>
  );
};
export default Menu;
