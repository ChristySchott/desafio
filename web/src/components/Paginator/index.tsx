import React from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Wrapper, Switch, Page, PaginatorLink } from './styles';

interface PaginatorProps {
  onClickPrevious: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onClickNext: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  currentPage: number;
  showNextPage: boolean;
}

const Paginator: React.FC<PaginatorProps> = ({
  onClickPrevious,
  onClickNext,
  currentPage,
  showNextPage,
}) => {
  return (
    <>
      <Wrapper>
        {currentPage > 1 && (
          <PaginatorLink onClick={onClickPrevious}>
            <FiChevronLeft size={20} color="#5dbcd2" />
          </PaginatorLink>
        )}
        <Switch>
          <Page>{currentPage}</Page>
        </Switch>
        {showNextPage && (
          <PaginatorLink onClick={onClickNext}>
            <FiChevronRight size={20} color="#5dbcd2" />
          </PaginatorLink>
        )}
      </Wrapper>
    </>
  );
};

export default Paginator;
