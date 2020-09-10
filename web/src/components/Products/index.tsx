import React from 'react';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { RiLayout2Fill } from 'react-icons/ri';

import { Container, View, Menu, OrderBy, Items } from './styles';
import Product from './Product';

import shirt from '../../assets/products/shirt-1.jpg';
import Select from '../Select';
import Paginator from '../Paginator';

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

      <Menu>
        <View>
          <BsGrid3X3GapFill size={20} color="#5dbcd2" />
          <RiLayout2Fill size={24} />
        </View>
        <OrderBy>
          <span>Ordenar por</span>
          <Select
            name="orderBy"
            placeholder="Preço"
            options={orderOptions}
            value="order"
          />
        </OrderBy>
      </Menu>

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

      <Paginator />
    </Container>
  );
};

export default Products;
