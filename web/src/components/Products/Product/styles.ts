import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.li`
  margin-top: 25px;
  width: 100%;

  @media (min-width: 768px) {
    width: 150px;
  }

  @media (min-width: 1024px) {
    width: 170px;
  }

  button {
    width: 100%;
    height: 35px;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    background-color: #5dbcd2;
    color: #fff;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${shade(0.2, '#5dbcd2')};
    }

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Image = styled.div`
  border: 1px solid #ddd;
  max-height: 168px;
  overflow: hidden;
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
  }

  span:nth-child(2) {
    text-decoration: line-through;
    color: #999;
    font-size: 1.5rem;
  }

  strong {
    color: #c61a28;
    font-weight: 600;
  }
`;
