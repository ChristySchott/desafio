import React from 'react';

import Container from './styles';

interface ContainerProps {
  open: boolean;
  setOpen: Function;
}

const Burger: React.FC<ContainerProps> = ({ open, setOpen }) => {
  return (
    <Container open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Container>
  );
};

export default Burger;
