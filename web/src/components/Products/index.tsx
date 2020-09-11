/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { RiLayout2Fill } from 'react-icons/ri';

import api from 'services/api';
import { useCategory } from 'hooks/category';
import { useFilter } from 'hooks/filter';
import { useColorFilter } from 'hooks/color';
import TagFilter from 'components/TagFilter';
import { ProductInterface } from 'hooks/cart';
import { Container, View, Menu, OrderBy, Items } from './styles';
import Product from './Product';

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
  const { category } = useCategory();
  const { filter, setFilter } = useFilter();
  const { colorToFilter, setColorToFilter } = useColorFilter();
  const [products, setProducts] = useState<ProductInterface[]>([]);

  let filters = '';
  let filterByType = '';
  useEffect(() => {
    if (filter) {
      filters = `?&filter.type=${filter}`;
      filterByType = `&filter.type=${filter}`;
    }

    if (colorToFilter) {
      filters = `?${filterByType}&filter.color=${colorToFilter}`;
    }
  }, [filter, colorToFilter]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get(`${category}${filters}`);
      setProducts(response.data);
    }

    loadProducts();
  }, [category, filter, colorToFilter]);

  return (
    <Container>
      <header>
        <h2>
          {category === 'calcas'
            ? 'Calças'
            : category === 'calcados'
            ? 'Calçados'
            : category}
        </h2>
        <div>
          {filter && <TagFilter name={filter} onRemove={() => setFilter('')} />}
          {colorToFilter && (
            <TagFilter
              name={colorToFilter}
              onRemove={() => setColorToFilter('')}
            />
          )}
        </div>
      </header>

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
        {products &&
          products.map(({ price, name, id, image, specialPrice }) => (
            <Product
              key={id}
              imageUrl={image}
              alt="Tênis azul da Adidas com cadarços rosas"
              name={name}
              price={price}
              offer={specialPrice}
            />
          ))}
      </Items>

      <Paginator />
    </Container>
  );
};

export default Products;
