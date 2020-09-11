/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import { useFilter } from 'hooks/filter';
import { useColorFilter } from 'hooks/color';
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
            <a href="/">Roupas</a>
          </li>
          <li>
            <a href="/">Sapatos</a>
          </li>
          <li>
            <a href="/">Acessórios</a>
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
