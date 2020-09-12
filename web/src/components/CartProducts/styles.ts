import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  margin-top: 40px;

  @media (min-width: 768px) {
    padding: 0 15px;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }

  header {
    margin-top: 10px;

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

export const Items = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  list-style: none;

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;

    li + li {
      margin-left: 45px;
    }

    li:nth-child(5),
    li:nth-child(9) {
      margin-left: 0px;
    }
  }

  @media (min-width: 1024px) {
    li + li {
      margin-left: 30px;
    }

    li:nth-child(5),
    li:nth-child(9) {
      margin-left: 30px;
    }

    li:nth-child(6) {
      margin-left: 0;
    }
  }

  @media (min-width: 1440px) {
    li + li {
      margin-left: 55px;
    }
  }
`;

export const CartState = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0 80px;

  @media (min-width: 768px) {
    margin-top: 100px;
  }

  p {
    margin-top: 10px;
    font-size: 1.8rem;
    color: #c61a28;
  }
`;

export const CartFilled = styled(CartState)`
  margin-bottom: 20px;

  p {
    margin-top: 5px;
  }

  @media (min-width: 768px) {
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;
