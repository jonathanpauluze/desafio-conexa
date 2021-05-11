import styled from 'styled-components';
import { Form } from '@unform/web';

export const NewAppointmentTitle = styled.h3`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: var(--blue-dark);

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const NewAppointmentForm = styled(Form)`
  display: flex;
  flex-direction: column;

  > div {
    + div {
      margin-top: 2rem;
    }
  }

  > button {
    align-self: flex-end;
    margin-top: 4rem;
  }
`;
