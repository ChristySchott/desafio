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
            <a href="/">Página inicial</a>
          </li>
          {categoriesList.length > 0 &&
            categoriesList.map(({ name, path }) => (
              <li>
                <button type="button" onClick={() => setCategory(path)}>
                  {name}
                </button>
              </li>
            ))}
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
      </NavWeb>
    </Container>
  );
};

export default Header;
