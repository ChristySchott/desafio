import React from 'react';

import CartProducts from 'components/CartProducts';
import { Container } from './styles';

const Cart: React.FC = () => {
  return (
    <Container>
      <ul>
        <CartProducts />
      </ul>
    </Container>
  );
};

export default Cart;
