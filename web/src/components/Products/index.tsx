import React from 'react';

import { Container, OrderBy, Dropdown, Items } from './styles';
import Product from './Product';

const Products: React.FC = () => {
  return (
    <Container>
      <h2>Sapatos</h2>

      <OrderBy>
        <span>Ordernar por</span>
        <Dropdown>Preço</Dropdown>
      </OrderBy>

      <Items>
        <Product />
      </Items>
    </Container>
  );
};

export default Products;
