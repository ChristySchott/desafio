import React from 'react';
import Header from '../../components/Header';
import Filters from '../../components/Filters';

import { Main, Page } from './styles';
import Products from '../../components/Products';
import { useFilter } from '../../hooks/filter';

const Dashboard: React.FC = () => {
  const { filter } = useFilter();

  return (
    <>
      <Header />
      <Page>
        <p>
          <a href="/">Página Inicial </a>
          &gt;
          <span>
            {filter === 'calcas'
              ? 'Calças'
              : filter === 'calcados'
              ? 'Calçados'
              : filter}
          </span>
        </p>
      </Page>
      <Main>
        <Filters />
        <Products />
      </Main>
    </>
  );
};

export default Dashboard;
