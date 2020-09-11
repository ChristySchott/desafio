import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #2068c8;
  border-radius: 15px;
  padding: 10px 6px;
  height: 33px;
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-top: 8px;
  padding-left: 12px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    font-weight: 500;
    font-size: 16px;
    color: #2068c8;
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
