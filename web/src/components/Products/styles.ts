import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  h2 {
    color: #c61a28;
    font-weight: 500;
  }
`;

export const OrderBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  span {
    color: #888;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.2rem;
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;

  list-style: none;
`;
