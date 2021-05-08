import { FC } from 'react';

import { Header } from '../../components/Header';
import { AppointmentsList } from '../../components/AppointmentsList';
import { FixedFooter } from '../../components/FixedFooter';

import { AppointmentsContainer } from './styles';

const Appointments: FC = () => {
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
