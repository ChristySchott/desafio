import React, { useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import logoImg from '../../assets/logo.png';

import { Container, Login, Content, Nav, Logo, Search } from './styles';
import Burger from '../Burger';
import Menu from '../Menu';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Login>
        <div>
          <p>
            <a href="/">Acesse sua Conta</a>
            ou
            <a href="/">Cadastre-se</a>
          </p>
        </div>
      </Login>

      <Content>
        <Nav>
          <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} />
          </div>
        </Nav>

        <Logo>
          <img src={logoImg} alt="" />
        </Logo>

        <Search>
          <BiSearch size={25} color="#c81120" />
        </Search>
      </Content>
    </Container>
  );
};

export default Header;
