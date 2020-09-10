import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 350px;
  height: 45px;
  border: 1px solid #888;

  input {
    width: 100%;
    height: 100%;
    border: none;
  }

  button {
    position: absolute;
    right: 0;
    bottom: 0;
    border: none;
    background: #c61a28;

    width: 85px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #888;

    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
  }
`;

export default Container;
