import React from 'react';
import Filters from 'components/Filters';

import Products from 'components/Products';
import { useCategory } from 'hooks/category';
import { Main, Page } from './styles';

const Dashboard: React.FC = () => {
  const { category } = useCategory();

  return (
    <>
      <Page>
        <p>
          <a href="/">Página Inicial </a>
          &gt;
          <span>
            {category === 'calcas'
              ? 'Calças'
              : category === 'calcados'
              ? 'Calçados'
              : category}
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
