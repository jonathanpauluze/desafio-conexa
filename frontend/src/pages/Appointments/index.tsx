import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';
import { AppointmentsList } from '../../components/AppointmentsList';
import { FixedFooter } from '../../components/FixedFooter';

import { AppointmentsContainer } from './styles';

const Appointments: FC = () => {
  const { token } = useAuth();
  const history = useHistory();

  if (!token) {
    history.push('/');
  }

  return (
    <>
      <Header />

      <AppointmentsContainer>
        <h1>Consultas</h1>

        <AppointmentsList />
      </AppointmentsContainer>

      <FixedFooter />
    </>
  );
};

export { Appointments };
