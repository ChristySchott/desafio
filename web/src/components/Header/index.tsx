import React, { useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import logoImg from 'assets/logo.png';

import { Link } from 'react-router-dom';
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
            <Link to="/">Acesse sua Conta</Link>
            ou
            <Link to="/">Cadastre-se</Link>
          </p>
        </div>
      </Login>

      <Content>
        <NavMobile>
          <div>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </NavMobile>

        <Logo>
          <Link to="/">
            <img
              src={logoImg}
              alt="Escrito Webjump com um símbolo de exclamação ao lado"
            />
          </Link>
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
            <Link to="/">Página inicial</Link>
          </li>
          <li>
            <Link to="/categories/camisetas">Camisetas</Link>
          </li>
          <li>
            <Link to="/categories/calcas">Calças</Link>
          </li>
          <li>
            <Link to="/categories/calcados">Calçados</Link>
          </li>
          <li>
            <Link to="/cart">Carrinho</Link>
          </li>
        </ul>
      </NavWeb>
    </Container>
  );
};

export default Header;
