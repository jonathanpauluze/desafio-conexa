import { FC, useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { Header } from '../../components/Header';
import { AppointmentsList } from '../../components/AppointmentsList';
import { FixedFooter } from '../../components/FixedFooter';
import { NewAppointmentModal } from '../../components/NewAppointmentModal';

import { AppointmentsContainer } from './styles';

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
interface CreateAppointmentData {
  patientId: string;
  date: string;
}

const Appointments: FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isNewAppointmentModalOpen, setIsNewAppointmentModalOpen] = useState(
    false,
  );
  const { token } = useAuth();
  const history = useHistory();

  if (!token) {
    history.push('/');
  }

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

  const handleOpenNewAppointmentModal = useCallback(() => {
    setIsNewAppointmentModalOpen(true);
  }, []);

  const handleCloseNewAppointmentModal = useCallback(() => {
    setIsNewAppointmentModalOpen(false);
  }, []);

  const createNewAppointment = useCallback(
    async (data: CreateAppointmentData) => {
      const requestConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const requestData = {
        patientId: data.patientId,
        date: new Date(data.date).toString(),
      };

      const response = await api.post(
        '/consultations',
        requestData,
        requestConfig,
      );

      const createdAppointment = response.data;

      const patientResponse = await api.get(
        `/patients?id=${createdAppointment.patientId}`,
        requestConfig,
      );

      const appointment = {
        id: response.data.id,
        date: response.data.date,
        patientId: response.data.patientId,
        patient: patientResponse.data[0],
      };

      setAppointments([...appointments, appointment]);
    },
    [token, appointments],
  );

  return (
    <>
      <Header />

      <AppointmentsContainer>
        <h1>Consultas</h1>

        <AppointmentsList appointments={appointments} />
      </AppointmentsContainer>

      <FixedFooter onOpenNewTransactionModal={handleOpenNewAppointmentModal} />

      <NewAppointmentModal
        isOpen={isNewAppointmentModalOpen}
        onRequestClose={handleCloseNewAppointmentModal}
        createNewAppointment={createNewAppointment}
      />
    </>
  );
};

export type { Appointment };
export { Appointments };
