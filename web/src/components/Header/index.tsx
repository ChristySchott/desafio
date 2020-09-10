import React, { useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import logoImg from '../../assets/logo.png';

import {
  Container,
  Login,
  Content,
  NavMobile,
  NavWeb,
  Logo,
  SearchIcon,
  SearchInput,
} from './styles';
import Burger from '../Burger';
import Menu from '../Menu';
import Input from '../Input';

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
        <NavMobile>
          <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} />
          </div>
        </NavMobile>

        <Logo>
          <img
            src={logoImg}
            alt="Escrito Webjump com um símbolo de exclamação ao lado"
          />
        </Logo>

        <SearchIcon>
          <BiSearch size={25} color="#c81120" />
        </SearchIcon>

        <SearchInput>
          <Input />
        </SearchInput>
      </Content>

      <NavWeb>
        <ul>
          <li>
            <a href="/">Página inicial</a>
          </li>
          <li>
            <a href="/">Camisetas</a>
          </li>
          <li>
            <a href="/">Calças</a>
          </li>
          <li>
            <a href="/">Sapatos</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
      </NavWeb>
    </Container>
  );
};

export default Header;
