import React from 'react';

import CategoryCard from 'components/CategoryCard';
import pants from 'assets/dashboard/pants.jpg';
import shirts from 'assets/dashboard/shirts.jpg';
import shoes from 'assets/dashboard/shoes.jpg';
import cart from 'assets/dashboard/cart.jpg';

import { Helmet } from 'react-helmet';
import { Main, Title, Cart } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Webjump | Dashboard</title>
        <meta
          name="description"
          content="Página inicial do e-commerce da Webjump"
        />
      </Helmet>
      <Title>
        <h3>Categorias</h3>
      </Title>
      <Main>
        <ul>
          <CategoryCard image={pants} name="Calças" path="categories/calcas" />
          <CategoryCard
            image={shirts}
            name="Camisetas"
            path="categories/camisetas"
          />
          <CategoryCard
            image={shoes}
            name="Sapatos"
            path="categories/sapatos"
          />
        </ul>
      </Main>

      <Title>
        <h3>Carrinho</h3>
      </Title>
      <Cart>
        <ul>
          <CategoryCard image={cart} name="Carrinho" path="cart" />
        </ul>
      </Cart>
    </>
  );
};

export default Dashboard;
