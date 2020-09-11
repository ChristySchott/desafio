import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  h2 {
    color: #c61a28;
    font-weight: 500;
    text-transform: capitalize;
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
