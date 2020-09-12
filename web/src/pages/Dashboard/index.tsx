import React from 'react';

import { Main, Page } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Page>
        <p>
          <a href="/">Página Inicial </a>
        </p>
      </Page>
      <Main>
        <p>Dashboard</p>
      </Main>
    </>
  );
};

export default Dashboard;
