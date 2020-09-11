import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  header {
    margin: 10px 0;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }

    > div {
      margin-top: 10px;
      display: flex;

      @media (min-width: 768px) {
        margin-top: 0;
      }

      > div {
        margin-right: 10px;
      }
    }
  }

  h2 {
    color: #c61a28;
    font-weight: 500;
    text-transform: capitalize;
    margin-right: 10px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  @media (min-width: 768px) {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 8px 0;
  }
`;

export const OrderBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    color: #888;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.2rem;
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const View = styled.div`
  display: none;
  padding-left: 2px;

  svg + svg {
    margin-left: 5px;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;

  list-style: none;
`;

export const EmptyState = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  p {
    margin-top: 10px;
    font-size: 1.8rem;
    color: #c61a28;
  }
`;
