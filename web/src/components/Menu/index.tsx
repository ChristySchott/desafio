import React from 'react';

import { useCategory } from 'hooks/category';
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
          <a href="/">Página inicial</a>
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
          <a href="/cart">Carrinho</a>
        </li>
      </ul>
    </Container>
  );
};
export default Menu;
