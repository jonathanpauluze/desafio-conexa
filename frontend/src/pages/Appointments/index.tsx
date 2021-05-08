import { FC } from 'react';

import { Header } from '../../components/Header';
import { EmptyState } from '../../components/EmptyState';

import { AppointmentsContainer } from './styles';

const Appointments: FC = () => {
  const appointments: string[] = [];

  return (
    <>
      <Header />
      <AppointmentsContainer>
        <h1>Consultas</h1>

        {!appointments.length ? (
          <EmptyState>Não há nenhuma consulta agendada</EmptyState>
        ) : null}
      </AppointmentsContainer>
    </>
  );
};

export { Appointments };
