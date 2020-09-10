import styled from 'styled-components';

const Main = styled.div`
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

export default Main;
