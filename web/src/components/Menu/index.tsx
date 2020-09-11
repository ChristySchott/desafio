import React, { useEffect, useState } from 'react';

import api from 'services/api';
import { useCategory } from 'hooks/category';
import Container from './styles';

interface MenuProps {
  open: boolean;
}

const Menu: React.FC<MenuProps> = ({ open }) => {
  const [categories, setCategories] = useState([]);

  const { setCategory } = useCategory();

  useEffect(() => {
    async function loadCategories(): Promise<void> {
      const response = await api.get('list');
      setCategories(response.data);
    }

    loadCategories();
  }, []);

  return (
    <Container open={open}>
      <ul>
        <li>
          <a href="/">Página inicial</a>
        </li>
        {categories.length > 0 &&
          categories.map(({ name, path }) => (
            <li key={name}>
              <button type="button" onClick={() => setCategory(path)}>
                {name}
              </button>
            </li>
          ))}
        <li>
          <a href="/">Contato</a>
        </li>
      </ul>
    </Container>
  );
};
export default Menu;
