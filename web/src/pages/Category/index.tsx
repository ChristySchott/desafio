import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import Filters from 'components/Filters';
import Products from 'components/Products';
import CartInfos from 'components/CartInfos';

import { Helmet } from 'react-helmet';
import { Main, Page } from './styles';

interface CategoryParams {
  category: string;
}

const Category: React.FC = () => {
  const { params } = useRouteMatch<CategoryParams>();
  return (
    <>
      <Helmet>
        <title>Webjump | Categorias</title>
        <meta
          name="description"
          content={`E-commerce da Webjump, buscando pela categoria ${params.category}`}
        />
      </Helmet>
      <Page>
        <p>
          <Link to="/">Página Inicial </Link>
          &gt;
          <span>{params.category.replace('lc', 'lç')}</span>
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
