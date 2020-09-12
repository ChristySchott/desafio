import styled from 'styled-components';

const Container = styled.div`
  border-radius: 4px;
  text-align: center;
  border: 1px solid #ddd;
  position: fixed;
  right: 15px;
  bottom: 20px;

  @media (min-width: 1200px) {
    right: 8%;
  }

  @media (min-width: 1440px) {
    right: 13.5%;
  }

  div {
    padding: 5px;
    background: #fff;
  }

  a {
    background: #5dbcd2;
    border-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 10px;
      color: #fff;
    }
  }
`;

export default Container;
