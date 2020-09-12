import styled from 'styled-components';

export const Main = styled.main`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1048px;
    margin: 10px auto 20px;
    position: relative;

    @media (min-width: 768px) {
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 20px;
      padding: 0 15px;

      li {
        width: 33%;
      }
    }

    @media (min-width: 1440px) {
      padding: 0;
    }
  }
`;

export const Cart = styled.section`
  ul {
    list-style: none;
    display: flex;
    max-width: 1048px;
    margin: 10px auto 20px;

    li {
      background-position: center 60%;
    }

    @media (min-width: 768px) {
      margin-top: 20px;
      justify-content: flex-start;
      padding: 0 15px;

      li {
        width: 100%;
      }
    }

    @media (min-width: 1440px) {
      padding: 0;
    }
  }
`;

export const Title = styled.div`
  margin-bottom: 10px;
  max-width: 1048px;
  margin: 0 auto;
  padding: 15px 0 0 15px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }

  a {
    color: #100c14;
  }

  h3 {
    color: #c61a28;
    text-transform: capitalize;
  }

  @media (min-width: 1440px) {
    padding: 15px 0 0;
    margin-top: 15px;
  }
`;
