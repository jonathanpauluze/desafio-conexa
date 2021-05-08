import { FC, useState, useEffect } from 'react';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

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
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      const fetchAppointments = async () => {
        const requestConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await api.get(
          '/consultations?_expand=patient',
          requestConfig,
        );

        localStorage.setItem(
          '@conexa:appointments',
          JSON.stringify(response.data),
        );

        setAppointments(response.data);
      };

      fetchAppointments();
    }
  }, [token]);

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
