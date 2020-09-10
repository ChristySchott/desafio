import React from 'react';
import Header from '../../components/Header';
import Filters from '../../components/Filters';

import Main from './styles';
import Products from '../../components/Products';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Filters />
        <Products />
      </Main>
    </>
  );
};

export default Dashboard;
