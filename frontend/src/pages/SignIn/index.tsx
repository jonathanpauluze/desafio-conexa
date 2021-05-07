import { FC } from 'react';

import { Header } from '../../components/Header';
import { SignInForm } from '../../components/SignInForm';

import signinBg from '../../assets/signin-bg.svg';

import {
  SignInContainer,
  SignInTitleWrapper,
  SignInFormWrapper,
} from './styles';

const SignIn: FC = () => {
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
