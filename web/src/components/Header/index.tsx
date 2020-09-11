import React, { useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import logoImg from 'assets/logo.png';

import { useCategory } from 'hooks/category';
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
  const { categoriesList, setCategory } = useCategory();

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
            <button type="button">Página inicial</button>
          </li>
          {categoriesList &&
            categoriesList.map(({ name, path }) => (
              <li key={name}>
                <button type="button" onClick={() => setCategory(path)}>
                  {name}
                </button>
              </li>
            ))}
          <li>
            <button type="button">Contato</button>
          </li>
        </ul>
      </NavWeb>
    </Container>
  );
};

export default Header;
