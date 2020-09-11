import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1048px;
  margin: 0 auto;

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    margin-top: 20px;
    padding: 0 15px;
  }

  @media (min-width: 1440px) {
    padding: 0;
  }
`;

export const Page = styled.div`
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

  span {
    color: #c61a28;
    text-transform: capitalize;
    margin-left: 4px;
  }
`;
