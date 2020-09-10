import styled from 'styled-components';

export const Container = styled.li`
  margin-top: 25px;
  width: 135px;

  @media (min-width: 768px) {
    width: 150px;
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
