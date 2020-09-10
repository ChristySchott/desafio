import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    margin-top: 20px;
    padding: 0 15px;
  }
`;

export default Main;
