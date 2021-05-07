import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ButtonOutline } from '../ButtonOutline';

import logoImg from '../../assets/logo-conexa.svg';

import { HeaderContainer, HeaderMessage } from './styles';

const Header: FC = () => {
  const isLoggedIn = false;

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="Logo Conexa" />
      </Link>

      {isLoggedIn ? (
        <HeaderMessage>
          <p>Olá, Dr. Yasuo</p>
          <ButtonOutline>Sair</ButtonOutline>
        </HeaderMessage>
      ) : null}
    </HeaderContainer>
  );
};

export { Header };
