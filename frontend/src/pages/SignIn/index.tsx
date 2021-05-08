import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';
import { SignInForm } from '../../components/SignInForm';

import signinBg from '../../assets/signin-bg.svg';

import {
  SignInContainer,
  SignInTitleWrapper,
  SignInFormWrapper,
} from './styles';

const SignIn: FC = () => {
  const { token } = useAuth();
  const history = useHistory();

  if (token) {
    history.push('/appointments');
  }

  return (
    <>
      <Header />

      <SignInContainer>
        <SignInTitleWrapper>
          <h1>Faça Login</h1>
          <img src={signinBg} alt="Faça login" />
        </SignInTitleWrapper>

        <SignInFormWrapper>
          <SignInForm />
        </SignInFormWrapper>
      </SignInContainer>
    </>
  );
};

export { SignIn };
