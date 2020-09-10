import React from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Wrapper, Switch, Page, PaginatorLink } from './styles';

const Paginator: React.FC = () => {
  return (
    <>
      <Wrapper>
        <PaginatorLink>
          <FiChevronLeft size={20} color="#5dbcd2" />
        </PaginatorLink>
        <Switch>
          <Page>1</Page>
        </Switch>
        <PaginatorLink>
          <FiChevronRight size={20} color="#5dbcd2" />
        </PaginatorLink>
      </Wrapper>
    </>
  );
};

export default Paginator;
