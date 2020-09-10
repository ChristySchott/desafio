/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import { Container, Page, Menu } from './styles';

const Filters: React.FC = () => {
  return (
    <Container>
      <Page>
        <p>
          <a href="/">Página Inicial </a>
          &gt;
          <span>Sapatos</span>
        </p>
      </Page>

      <Menu>
        <h1>Filtre por</h1>

        <h2>Categorias</h2>
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

        <h2>Cores</h2>
        <ul>
          <li>
            <a href="/" />
          </li>
          <li>
            <a href="/" />
          </li>
          <li>
            <a href="/" />
          </li>
        </ul>

        <h2>Tipo</h2>
        <ul>
          <li>
            <a href="/">Corrida</a>
          </li>
          <li>
            <a href="/">Caminhada</a>
          </li>
          <li>
            <a href="/">Casual</a>
          </li>
          <li>
            <a href="/">Social</a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Filters;
