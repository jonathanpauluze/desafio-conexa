import styled from 'styled-components';
import { Form } from '@unform/web';

export const SignInFormContainer = styled(Form)`
  width: 100%;
  max-width: 14.688rem;

  @media (max-width: 768px) {
    max-width: 17rem;
  }

  div {
    + div {
      margin-top: 2rem;
    }
  }

  button {
    &[type='submit'] {
      width: 100%;
      margin-top: 4.75rem;

      @media (max-width: 768px) {
        margin-top: 2.5rem;
      }
    }
  }
`;
