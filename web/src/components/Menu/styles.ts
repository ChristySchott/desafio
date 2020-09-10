import styled from 'styled-components';

interface ContainerProps {
  open: boolean;
}

const Container = styled.nav<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c81120;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 320px) {
    width: 100%;
  }

  div {
    text-align: center;
  }

  a {
    display: block;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 320px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #ddd;
    }
  }
`;

export default Container;
