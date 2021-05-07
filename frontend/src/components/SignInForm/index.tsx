import { FC } from 'react';

import { Input } from '../Input';
import { Button } from '../Button';

import { SignInFormContainer } from './styles';

const SignInForm: FC = () => {
  return (
    <SignInFormContainer>
      <Input
        type="email"
        id="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <Input
        type="password"
        id="password"
        label="Senha"
        placeholder="Digite sua senha"
        tooltip="Sua senha de acesso é recebida por e-mail."
      />
      <Button type="submit">Entrar</Button>
    </SignInFormContainer>
  );
};

export { SignInForm };
