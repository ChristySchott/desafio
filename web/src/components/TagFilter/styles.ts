import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #c61a28;
  border-radius: 4px;
  padding: 5px;
  height: 33px;
  display: flex;
  align-items: center;
  padding-left: 7px;

  @media (min-width: 768px) {
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    font-size: 1.4rem;
    color: #c61a28;

    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }

  button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    width: 20px;
    height: 20px;
  }
`;
