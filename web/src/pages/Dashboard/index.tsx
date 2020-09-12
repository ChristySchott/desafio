import React from 'react';

import CategoryCard from 'components/CategoryCard';
import pants from 'assets/categories/pants.jpg';
import shirts from 'assets/categories/shirts.jpg';
import shoes from 'assets/categories/shoes.jpg';

import { Main, Page } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Page>
        <p>
          <a href="/">Página Inicial </a>
        </p>
      </Page>
      <Main>
        <ul>
          <CategoryCard image={pants} name="Calças" path="calcas" />
          <CategoryCard image={shirts} name="Camisetas" path="camisetas" />
          <CategoryCard image={shoes} name="Sapatos" path="sapatos" />
        </ul>
      </Main>
    </>
  );
};

export default Dashboard;
