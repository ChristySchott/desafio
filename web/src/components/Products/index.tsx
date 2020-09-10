import React from 'react';

import { Container, OrderBy, Dropdown, Items } from './styles';
import Product from './Product';

import shirt from '../../assets/products/shirt-1.jpg';

const Products: React.FC = () => {
  return (
    <Container>
      <h2>Sapatos</h2>

      <OrderBy>
        <span>Ordernar por</span>
        <Dropdown>Preço</Dropdown>
      </OrderBy>

      <Items>
        <Product
          imageUrl={shirt}
          alt="Tênis azul da Adidas com cadarços rosas"
          name="Tênis Adidas"
          price="R$299,90"
        />
        <Product
          imageUrl={shirt}
          alt="Tênis azul da Adidas com cadarços rosas"
          name="Tênis Adidas"
          price="R$299,90"
        />
        <Product
          imageUrl={shirt}
          alt="Tênis azul da Adidas com cadarços rosas"
          name="Tênis Adidas"
          price="R$299,90"
        />
        <Product
          imageUrl={shirt}
          alt="Tênis azul da Adidas com cadarços rosas"
          name="Tênis Adidas"
          offer="R$499,00"
          price="R$299,90"
        />
      </Items>
    </Container>
  );
};

export default Products;
