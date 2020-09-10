import styled from 'styled-components';

export const Container = styled.div``;

export const Login = styled.div`
  width: 100%;
  background: #231f20;
  color: #fff;

  div {
    width: 100%;
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 1048px;
    margin: 0 auto;

    @media (min-width: 768px) {
      justify-content: flex-end;
      padding-right: 5px;
    }

    @media (min-width: 1048px) {
      padding-right: 0;
    }

    p {
      display: flex;
      align-items: center;

      font-size: 1.5rem;

      a {
        color: #fff;
        font-weight: 600;
        margin: 0 4px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;

  max-width: 1048px;
  margin: 0 auto;
`;

export const Nav = styled.div``;

export const Logo = styled.div`
  img {
    margin-top: 4px;
  }
`;

export const Search = styled.div``;
