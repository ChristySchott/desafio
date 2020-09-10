import React from 'react';

import { Container, OrderBy, Items } from './styles';
import Product from './Product';

import shirt from '../../assets/products/shirt-1.jpg';
import Select from '../Select';

interface OptionTypes {
  value: string;
  label: string;
}

const orderOptions: OptionTypes[] = [
  { value: 'preço', label: 'Preço' },
  { value: 'data', label: 'Data' },
];

const Products: React.FC = () => {
  return (
    <Container>
      <h2>Sapatos</h2>

      <OrderBy>
        <span>Ordenar por</span>
        <Select
          name="orderBy"
          placeholder="Preço"
          options={orderOptions}
          value="order"
        />
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
