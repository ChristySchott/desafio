/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { Link } from 'react-router-dom';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import logo from 'assets/logo.png';
import {
  Wrapper,
  Content,
  Logo,
  Magento,
  ContactSocialMedias,
  Connect,
  Copyright,
} from './styles';

const Footer: React.FC = () => (
  <Wrapper>
    <Content>
      <Logo href="/">
        <img
          src={logo}
          alt="Escrito Webjump com um símbolo de exclamação ao lado"
        />
        <p>Criar, planejar e desenvolver Ideias que transformam.</p>
      </Logo>

      <Magento>
        <h4>Magento</h4>
        <ul>
          <li>
            <Link to="/">Magento B2B</Link>
          </li>
          <li>
            <Link to="/">Por que Magento?</Link>
          </li>
          <li>
            <Link to="/">Magento Commerce</Link>
          </li>
          <li>
            <Link to="/">Magento Open Source</Link>
          </li>
        </ul>
      </Magento>

      <Connect>
        <h4>Conecte-se</h4>
        <div>
          <h4>Christy</h4>

          <ContactSocialMedias>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/christy-hauschild/"
            >
              <AiFillLinkedin size={30} color="#222" />
            </a>
            <a href="https://github.com/christyschott" target="_blank">
              <AiFillGithub size={30} color="#222" />
            </a>
          </ContactSocialMedias>
        </div>

        <div>
          <h4>Webjump</h4>

          <ContactSocialMedias>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/christarget='_blank' hrefpher-hauschild-a091871a4/"
            >
              <AiFillLinkedin size={30} color="#222" />
            </a>
            <a target="_blank" href="https://github.com/ChristopherHauschild">
              <AiFillTwitterCircle size={30} color="#222" />
            </a>
          </ContactSocialMedias>
        </div>
      </Connect>
    </Content>

    <Copyright>Desenvolvido por Christy para desafio da Webjump!</Copyright>
  </Wrapper>
);

export default Footer;
