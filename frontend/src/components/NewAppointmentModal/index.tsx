import { FC, useState, useEffect, useRef, useCallback } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';

import { NewAppointmentTitle, NewAppointmentForm } from './styles';

Modal.setAppElement('#root');

interface NewAppointmentModalProps {
  isOpen: boolean;
  onRequestClose(): void;
  createNewAppointment(data: CreateAppointmentData): Promise<void>;
}

interface CreateAppointmentData {
  patientId: string;
  date: string;
  time: string;
}

interface Patient {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

const NewAppointmentModal: FC<NewAppointmentModalProps> = ({
  isOpen,
  onRequestClose,
  createNewAppointment,
}) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const formRef = useRef<FormHandles>(null);
  const { token } = useAuth();

  useEffect(() => {
    const storagedPatients = localStorage.getItem('@conexa:patients');

    if (storagedPatients) {
      const parsedPatients: Patient[] = JSON.parse(storagedPatients);

      setPatients(parsedPatients);
    } else {
      const fetchPatients = async () => {
        const requestConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await api.get('/patients', requestConfig);

        localStorage.setItem('@conexa:patients', JSON.stringify(response.data));
      };

      fetchPatients();
    }
  }, [token]);

  const handleCreateNewAppointment = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});

        const validationSchema = Yup.object().shape({
          patientId: Yup.string().notOneOf(['0'], 'Paciente obrigatório'),
          date: Yup.string().required('Data obrigatória'),
          time: Yup.string().required('Hora obrigatória'),
        });

        await validationSchema.validate(data, {
          abortEarly: false,
        });

        await createNewAppointment(data);

        onRequestClose();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [createNewAppointment, onRequestClose],
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <FiX />
      </button>

      <NewAppointmentTitle>Novo atendimento</NewAppointmentTitle>

      <NewAppointmentForm ref={formRef} onSubmit={handleCreateNewAppointment}>
        <Select name="patientId" label="Paciente" defaultValue="0">
          <option disabled value="0">
            Selecione um paciente
          </option>
          {patients.map(patient => (
            <option key={patient.first_name} value={patient.id}>
              {patient.first_name} {patient.last_name}
            </option>
          ))}
        </Select>

        <Input name="date" type="date" label="Data" />

        <Input name="time" type="time" label="Hora" />

        <Button type="submit">Agendar</Button>
      </NewAppointmentForm>
    </Modal>
  );
};

export { NewAppointmentModal };
