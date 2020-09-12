/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import { useFilter } from 'hooks/filter';
import { useColorFilter } from 'hooks/color';
import { Link } from 'react-router-dom';
import { Container, Menu, Colors } from './styles';

const Filters: React.FC = () => {
  const { setFilter } = useFilter();
  const { setColorToFilter } = useColorFilter();

  return (
    <Container>
      <Menu>
        <h2>Filtre por</h2>

        <h3>Categorias</h3>
        <ul>
          <li>
            <Link to="/">Roupas</Link>
          </li>
          <li>
            <Link to="/">Sapatos</Link>
          </li>
          <li>
            <Link to="/">Acessórios</Link>
          </li>
        </ul>

        <h3>Cores</h3>
        <Colors>
          <li>
            <button
              type="button"
              onClick={() => setColorToFilter('Vermelho')}
            />
          </li>
          <li>
            <button type="button" onClick={() => setColorToFilter('Amarelo')} />
          </li>
          <li>
            <button type="button" onClick={() => setColorToFilter('Azul')} />
          </li>
        </Colors>

        <h3>Tipo</h3>
        <ul>
          <li>
            <button type="button" onClick={() => setFilter('Corrida')}>
              Corrida
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setFilter('Caminhada')}>
              Caminhada
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setFilter('Casual')}>
              Casual
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setFilter('Social')}>
              Social
            </button>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Filters;
