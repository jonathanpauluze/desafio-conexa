import { FC, useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Input } from '../Input';
import { Button } from '../Button';

import type { SignInCredentials } from '../../hooks/auth';
import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationErrors';

import { SignInFormContainer } from './styles';

const SignInForm: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

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

        await signIn(data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Usuário ou senha inválido', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    [signIn],
  );

  return (
    <>
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

      <ToastContainer />
    </>
  );
};

export { SignInForm };
