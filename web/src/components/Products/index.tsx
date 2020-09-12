/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { RiLayout2Fill } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';

import api from 'services/api';
import { useFilter } from 'hooks/filter';
import { useColorFilter } from 'hooks/color';
import TagFilter from 'components/TagFilter';
import { ProductInterface } from 'hooks/cart';
import Product from './Product';

import Select from '../Select';
import Paginator from '../Paginator';

import { Container, View, Menu, OrderBy, Items, EmptyState } from './styles';

interface CategoryParams {
  category: string;
}

interface OptionTypes {
  value: string;
  label: string;
}

const orderOptions: OptionTypes[] = [
  { value: 'preço', label: 'Preço' },
  { value: 'data', label: 'Data' },
];

const Products: React.FC = () => {
  const { params } = useRouteMatch<CategoryParams>();
  const { filter, setFilter } = useFilter();
  const { colorToFilter, setColorToFilter } = useColorFilter();
  const [products, setProducts] = useState<ProductInterface[]>([]);

  let filters = '';
  let filterByType = '';
  useEffect(() => {
    filters = '';

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
      const response = await api.get(`/${params.category}${filters}`);
      setProducts(response.data);
    }
    loadProducts();
  }, [params.category, filter, colorToFilter]);

  return (
    <Container>
      <header>
        <h2>Oi</h2>
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
        {products.length > 0 ? (
          products.map(product => (
            <Product
              key={product.id}
              imageUrl={product.image}
              alt="Tênis azul da Adidas com cadarços rosas"
              name={product.name}
              price={product.price}
              offer={product.specialPrice}
              item={product}
            />
          ))
        ) : (
          <EmptyState>
            <FiSearch size={50} color="#c61a28" />
            <p>Oops! Não encontramos nenhum produto.</p>
          </EmptyState>
        )}
      </Items>
      <Paginator />
    </Container>
  );
};

export default Products;
