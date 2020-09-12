import React from 'react';

import { Link } from 'react-router-dom';
import Container from './styles';

interface MenuProps {
  open: boolean;
  setOpen: Function;
}

const Menu: React.FC<MenuProps> = ({ open, setOpen }) => {
  return (
    <Container open={open}>
      <ul>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>
            Página inicial
          </Link>
        </li>
        <li>
          <Link to="/categories/camisetas" onClick={() => setOpen(false)}>
            Camisetas
          </Link>
        </li>
        <li>
          <Link to="/categories/calcas" onClick={() => setOpen(false)}>
            Calças
          </Link>
        </li>
        <li>
          <Link to="/categories/calcados" onClick={() => setOpen(false)}>
            Calçados
          </Link>
        </li>
        <li>
          <Link to="cart">Carrinho</Link>
        </li>
      </ul>
    </Container>
  );
};
export default Menu;
