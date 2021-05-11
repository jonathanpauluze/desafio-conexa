import { FC, useState } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

import api from '../../../services/api';

import questionIcon from '../../../assets/question.svg';

import { Accordion } from '../../Accordion';

import { HelpModalTitle, HelpModalContent } from './styles';

Modal.setAppElement('#root');

interface HelpModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

interface FaqData {
  id: number;
  question: string;
  answer: string;
}

const HelpModal: FC<HelpModalProps> = ({ isOpen, onRequestClose }) => {
  const [faqList, setFaqList] = useState<FaqData[]>(() => {
    const storedFaqList = localStorage.getItem('@conexa:FAQ');

    if (storedFaqList) {
      return JSON.parse(storedFaqList);
    }

    return [];
  });

  const token = localStorage.getItem('@conexa:token');

  if (!faqList.length) {
    const fetchFaqList = async () => {
      const requestConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await api.get('/faq', requestConfig);

      localStorage.setItem('@conexa:faq', JSON.stringify(response.data));
      setFaqList(response.data);
    };

    fetchFaqList();
  }

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

      <HelpModalTitle>
        <img src={questionIcon} alt="ajuda" aria-hidden="true" />
        <strong>Ajuda</strong>
      </HelpModalTitle>

      <HelpModalContent>
        {faqList.map(({ id, question, answer }) => (
          <Accordion key={id} question={question} answer={answer} />
        ))}
      </HelpModalContent>
    </Modal>
  );
};

export { HelpModal };
