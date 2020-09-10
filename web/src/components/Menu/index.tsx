import React, { useEffect, useState } from 'react';

import Container from './styles';
import api from '../../services/api';

interface MenuProps {
  open: boolean;
}

const Menu: React.FC<MenuProps> = ({ open }) => {
  const [categories, setCategories] = useState([]);

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
            <li>
              <a href={`/${path}`}>{name}</a>
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
