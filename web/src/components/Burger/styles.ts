import styled, { css } from 'styled-components';

interface ContainerProps {
  open: boolean;
}

const Container = styled.button<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.4rem;
  height: 2.4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  ${({ open }) =>
    open &&
    css`
      position: absolute;
      top: 4%;
      left: 2.5rem;
      transition: top 1s ease-out;
    `};

  &:focus {
    outline: none;
  }

  div {
    width: 2.5rem;
    height: 0.3rem;
    background-color: ${({ open }) => (open ? '#fff' : '#000')};
    border-radius: 10px;
    transition: transform 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default Container;
