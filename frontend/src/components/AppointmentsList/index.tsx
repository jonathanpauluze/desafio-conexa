import { FC } from 'react';

import { EmptyState } from '../EmptyState';
import { Button } from '../Button';

import {
  AppointmentListContainer,
  AppointmentListItem,
  AppointmentListCounter,
} from './styles';

interface Appointment {
  id: number;
  patientId: number;
  date: Date;
  patient: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
}

const AppointmentsList: FC = () => {
  const appointments: Appointment[] = [
    {
      id: 1,
      patientId: 1,
      date: new Date(),
      patient: {
        id: 1,
        first_name: 'Jonathan',
        last_name: 'Pauluze dos Santos Vieira Almeida Vegara',
        email: 'jonathan@conexa.com',
      },
    },
    {
      id: 2,
      patientId: 2,
      date: new Date(),
      patient: {
        id: 2,
        first_name: 'Winona',
        last_name: 'Pauluze dos Santos Vieira Almeida Vegara',
        email: 'winona@conexa.com',
      },
    },
  ];

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
        const formattedDate = date.toLocaleDateString('pt-BR');
        const formattedTime = date.toLocaleTimeString('pt-BR', {
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
