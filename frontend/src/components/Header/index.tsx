import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { ButtonOutline } from '../ButtonOutline';

import logoImg from '../../assets/logo-conexa.svg';

import { HeaderContainer, HeaderContent, HeaderMessage } from './styles';

interface HeaderProps {
  onOpenSignOutModal?(): void;
}

const Header: FC<HeaderProps> = ({ onOpenSignOutModal }) => {
  const { user } = useAuth();
  const token = localStorage.getItem('@conexa:token');

  return (
    <HeaderContainer>
      <HeaderContent isLoggedIn={!!token}>
        <Link to="/">
          <img src={logoImg} alt="Logo Conexa" />
        </Link>

        {token ? (
          <HeaderMessage>
            <p>Olá, Dr. {user}</p>
            <ButtonOutline onClick={onOpenSignOutModal}>Sair</ButtonOutline>
          </HeaderMessage>
        ) : null}
      </HeaderContent>
    </HeaderContainer>
  );
};

export { Header };
