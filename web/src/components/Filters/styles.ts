import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 290px;
  margin: 10px auto 15px;

  @media (min-width: 768px) {
    width: 270px;
    margin-top: 0;
    margin-right: 25px;
  }
`;

export const Menu = styled.div`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 2px;

  h2,
  h3 {
    text-transform: uppercase;
  }

  h2 {
    color: #c61a28;
    line-height: 1;
  }

  h3 {
    color: #04acac;
    margin-bottom: 12px;
  }

  ul {
    margin-left: 20px;

    li {
      padding: 0;
    }

    a {
      color: #888;
    }

    button {
      background: transparent;
      border: none;
      color: #888;
      transition: color 0.2s ease;

      &:hover {
        color: ${shade(0.4, '#888')};
      }
    }

    li + li {
      margin-top: 5px;
    }
  }

  h3:not(:first-child) {
    margin-top: 16px;
  }
`;

export const Colors = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 !important;

  li {
    width: 50px;
    height: 20px;
    background: #c61a28;
    margin: 0 !important;
  }

  li:nth-child(2) {
    background: #ebdc10;
  }

  li:nth-child(3) {
    background: #04acac;
  }

  li + li {
    margin-left: 5px !important;
  }
`;
