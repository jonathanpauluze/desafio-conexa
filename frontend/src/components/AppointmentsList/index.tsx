import { FC } from 'react';

import { EmptyState } from '../EmptyState';
import { Button } from '../Button';

import type { Appointment } from '../../pages/Appointments';

import {
  AppointmentListContainer,
  AppointmentListItem,
  AppointmentListCounter,
} from './styles';

interface AppointmentsListProps {
  appointments: Appointment[];
}

const AppointmentsList: FC<AppointmentsListProps> = ({ appointments }) => {
  if (!appointments.length) {
    return <EmptyState>Não há nenhuma consulta agendada</EmptyState>;
  }

  return (
    <AppointmentListContainer>
      <AppointmentListCounter>
        {appointments.length} consultas agendadas
      </AppointmentListCounter>

      {appointments.map(({ id, date, patient }) => {
        const fullName = `${patient.first_name} ${patient.last_name}`;
        const formattedDate = new Date(date).toLocaleDateString('pt-BR');
        const formattedTime = new Date(date).toLocaleTimeString('pt-BR', {
          hour: 'numeric',
          minute: 'numeric',
        });

        return (
          <AppointmentListItem key={id}>
            <div>
              <p title={fullName}>{fullName}</p>
              <span>
                {formattedDate} às {formattedTime}
              </span>
            </div>

            <Button type="button">Atender</Button>
          </AppointmentListItem>
        );
      })}
    </AppointmentListContainer>
  );
};

export { AppointmentsList };
