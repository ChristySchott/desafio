import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import Filters from 'components/Filters';
import Products from 'components/Products';
import CartInfos from 'components/CartInfos';
import { Main, Page } from './styles';

interface CategoryParams {
  category: string;
}

const Category: React.FC = () => {
  const { params } = useRouteMatch<CategoryParams>();
  return (
    <>
      <Page>
        <p>
          <Link to="/">Página Inicial </Link>
          &gt;
          <span>{params.category}</span>
        </p>
      </Page>
      <Main>
        <Filters />
        <Products />
        <CartInfos />
      </Main>
    </>
  );
};

export default Category;
