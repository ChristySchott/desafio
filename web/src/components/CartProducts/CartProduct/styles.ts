import styled from 'styled-components';

export const Container = styled.li`
  margin-top: 25px;
  width: 135px;

  @media (min-width: 768px) {
    width: 150px;
    margin: 0 0 25px;
  }

  @media (min-width: 1024px) {
    width: 170px;
  }
`;

export const Image = styled.div`
  border: 1px solid #ddd;

  img {
    width: 100%;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  height: 100px;
  padding: 10px 0;

  span {
    text-transform: uppercase;
    font-size: 1.6rem;
    display: block;
  }

  div {
    span {
      font-size: 1.4rem;
      margin-bottom: 2px;
    }

    strong {
      color: #c61a28;
      font-size: 1.6rem;
    }
  }
`;

export const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button:nth-child(1) {
    margin-right: 10px;
  }

  button {
    width: 25px;
    height: 25px;

    background: #5dbcd2;
    border: none;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
