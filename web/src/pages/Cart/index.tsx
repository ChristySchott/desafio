import React from 'react';

import CartProducts from 'components/CartProducts';
import { Helmet } from 'react-helmet';
import { Container } from './styles';

const Cart: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Webjump | Carrinho</title>
        <meta name="description" content="Carrinho no E-commerce da Webjump" />
      </Helmet>
      <Container>
        <ul>
          <CartProducts />
        </ul>
      </Container>
    </>
  );
};

export default Cart;
