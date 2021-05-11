import { FC } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { ButtonOutline } from '../ButtonOutline';
import { Button } from '../Button';

import { SignOutModalTitle, SignOutModalButtonsWrapper } from './styles';

Modal.setAppElement('#root');

interface SignOutModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

const SignOutModal: FC<SignOutModalProps> = ({ isOpen, onRequestClose }) => {
  const { signOut } = useAuth();

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

      <SignOutModalTitle>Deseja fazer logout?</SignOutModalTitle>

      <SignOutModalButtonsWrapper>
        <ButtonOutline type="button" onClick={onRequestClose}>
          Não
        </ButtonOutline>
        <Button type="button" onClick={signOut}>
          Sim
        </Button>
      </SignOutModalButtonsWrapper>
    </Modal>
  );
};

export { SignOutModal };
