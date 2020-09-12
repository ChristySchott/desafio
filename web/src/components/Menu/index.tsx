import React from 'react';

import { Link } from 'react-router-dom';
import Container from './styles';

interface MenuProps {
  open: boolean;
}

const Menu: React.FC<MenuProps> = ({ open }) => {
  return (
    <Container open={open}>
      <ul>
        <li>
          <Link to="/">Página inicial</Link>
        </li>
        <li>
          <Link to="/categories/camisetas">Camisetas</Link>
        </li>
        <li>
          <Link to="/categories/calcas">Calças</Link>
        </li>
        <li>
          <Link to="/categories/calcados">Calçados</Link>
        </li>
        <li>
          <Link to="cart">Carrinho</Link>
        </li>
      </ul>
    </Container>
  );
};
export default Menu;
