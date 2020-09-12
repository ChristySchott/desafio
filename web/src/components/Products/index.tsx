/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { RiLayoutGridFill } from 'react-icons/ri';
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

interface OptionType {
  value: string;
  label: string;
}

const orderOptions: OptionType[] = [
  { value: 'DESC', label: 'Maior preço' },
  { value: 'CRESC', label: 'Menor preço' },
];

const Products: React.FC = () => {
  const { params } = useRouteMatch<CategoryParams>();

  const { filter, setFilter } = useFilter();
  const { colorToFilter, setColorToFilter } = useColorFilter();

  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchOrder, setSearchOrder] = useState('CRESC');
  const [gridType, setGridType] = useState(1);

  let filters = '';
  let filterByColor = '';
  useEffect(() => {
    filters = '';

    if (filter) {
      filters = `&filter.type=${filter}`;
      filterByColor = `&filter.type=${filter}`;
    }

    if (colorToFilter) {
      filters = `${filterByColor}&filter.color=${colorToFilter}`;
    }
  }, [filter, colorToFilter]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get(
        `/${params.category}?_page=${currentPage}&_limit=8&_sort=price&_order=${searchOrder}${filters}`,
      );
      setProducts(response.data);
    }
    loadProducts();
  }, [params.category, filter, colorToFilter, currentPage, searchOrder]);

  useEffect(() => {
    setCurrentPage(1);
  }, [params.category]);

  function handleChange(option: string) {
    setSearchOrder(option);
  }

  return (
    <Container>
      <header>
        <h2>{params.category.replace('lc', 'lç')}</h2>
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
          <button type="button" onClick={() => setGridType(1)}>
            <BsGrid3X3GapFill
              size={20}
              color={gridType === 1 ? '#5dbcd2' : '#888'}
            />
          </button>
          <button type="button" onClick={() => setGridType(2)}>
            <RiLayoutGridFill
              size={23.5}
              color={gridType === 2 ? '#5dbcd2' : '#888'}
            />
          </button>
        </View>
        <OrderBy>
          <span>Ordenar por</span>
          <Select
            name="orderBy"
            placeholder="Menor Preço"
            options={orderOptions}
            value={orderOptions.filter(option => option.value === searchOrder)}
            onChange={(selected: OptionType) =>
              handleChange((selected as OptionType).value)
            }
            getOptionValue={({ value }: OptionType) => value}
          />
        </OrderBy>
      </Menu>

      <Items layoutGridFill={gridType === 2}>
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
      <Paginator
        currentPage={currentPage}
        onClickPrevious={() => setCurrentPage(currentPage - 1)}
        onClickNext={() => setCurrentPage(currentPage + 1)}
        showNextPage={products.length > 0}
      />
    </Container>
  );
};

export default Products;
