import React from 'react';
import Header from '../../components/Header';
import Filters from '../../components/Filters';

import { Main, Page } from './styles';
import Products from '../../components/Products';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Page>
        <p>
          <a href="/">Página Inicial </a>
          &gt;
          <span> Sapatos</span>
        </p>
      </Page>
      <Main>
        <Filters />
        <Products />
      </Main>
    </>
  );
};

export default Dashboard;
