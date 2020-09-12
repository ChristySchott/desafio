import styled from 'styled-components';

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  max-width: 350px;
  margin: 12px auto;

  @media (max-width: 320px) {
    max-width: 90px;
    padding: 5px 10px;
  }

  a {
    text-decoration: none;
    transition: color 0.5s;
    height: 20px;
  }
`;

export const Switch = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 3;
  height: 100%;
`;

export const Page = styled.a`
  font-size: 1.5rem;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 0.914285px;
  cursor: pointer;

  &:hover {
    color: #c61a28;
  }
`;

export const PaginatorLink = styled.button`
  background: none;
  border: none;
  max-height: 23px;
`;
