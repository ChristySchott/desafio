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
      padding-right: 15px;
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

  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 20px 10px;
  }

  @media (min-width: 1024px) {
    padding: 25px 0;
  }

  @media (min-width: 1060px) {
    max-width: 1048px;
  }
`;

export const NavMobile = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavWeb = styled.div`
  display: none;
  width: 100%;
  background: #c61a28;
  padding: 15px 0;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1024px) {
    padding: 15px;
  }

  ul {
    padding: 0 15px;
    width: 100%;
    max-width: 1048px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    list-style: none;

    @media (min-width: 1024px) {
      justify-content: flex-start;
      padding: 0;

      li + li {
        margin-left: 30px;
      }
    }

    button,
    a {
      background: transparent;
      border: none;
      color: #fff;
      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;

export const Logo = styled.div`
  img {
    margin-top: 4px;
  }
`;

export const SearchIcon = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SearchInput = styled.div`
  display: none;
  width: 50%;

  @media (min-width: 768px) {
    display: block;
  }
`;
