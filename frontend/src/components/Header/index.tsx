import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { ButtonOutline } from '../ButtonOutline';

import logoImg from '../../assets/logo-conexa.svg';

import { HeaderContainer, HeaderMessage } from './styles';

const Header: FC = () => {
  const { user, token, signOut } = useAuth();

  return (
    <HeaderContainer isLoggedIn={!!token}>
      <Link to="/">
        <img src={logoImg} alt="Logo Conexa" />
      </Link>

      {token ? (
        <HeaderMessage>
          <p>Olá, Dr. {user}</p>
          <ButtonOutline onClick={signOut}>Sair</ButtonOutline>
        </HeaderMessage>
      ) : null}
    </HeaderContainer>
  );
};

export { Header };
