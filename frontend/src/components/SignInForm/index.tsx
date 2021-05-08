import { FC, useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import { Input } from '../Input';
import { Button } from '../Button';

import type { SignInCredentials } from '../../hooks/AuthContext';
import { useAuth } from '../../hooks/AuthContext';

import getValidationErrors from '../../utils/getValidationErrors';

import { SignInFormContainer } from './styles';

const SignInForm: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInCredentials) => {
      try {
        formRef.current?.setErrors({});

        const validationSchema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await validationSchema.validate(data, {
          abortEarly: false,
        });

        signIn(data);

        history.push('/appointments');
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn, history],
  );

  return (
    <SignInFormContainer ref={formRef} onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
      />
      <Input
        type="password"
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        tooltip="Sua senha de acesso é recebida por e-mail."
      />
      <Button type="submit">Entrar</Button>
    </SignInFormContainer>
  );
};

export { SignInForm };
