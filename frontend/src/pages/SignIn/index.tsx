import { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { Header } from '../../components/Header';
import { SignInForm } from '../../components/SignInForm';

import signinBg from '../../assets/signin-bg.svg';

import {
  SignInContainer,
  SignInTitleWrapper,
  SignInFormWrapper,
} from './styles';

const SignIn: FC = () => {
  const token = localStorage.getItem('@conexa:token');

  return token ? (
    <Redirect to="/appointments" />
  ) : (
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
