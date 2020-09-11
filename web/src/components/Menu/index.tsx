import React from 'react';

import { useCategory } from 'hooks/category';
import { Link } from 'react-router-dom';
import Container from './styles';

interface MenuProps {
  open: boolean;
}

const Menu: React.FC<MenuProps> = ({ open }) => {
  const { categoriesList, setCategory } = useCategory();

  return (
    <Container open={open}>
      <ul>
        <li>
          <Link to="/">Página inicial</Link>
        </li>
        {categoriesList &&
          categoriesList.map(({ name, path }) => (
            <li key={name}>
              <button type="button" onClick={() => setCategory(path)}>
                {name}
              </button>
            </li>
          ))}
        <li>
          <Link to="cart">Carrinho</Link>
        </li>
      </ul>
    </Container>
  );
};
export default Menu;
