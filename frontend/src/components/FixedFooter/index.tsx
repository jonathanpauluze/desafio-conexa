import { FC, useState, useCallback } from 'react';

import { ButtonOutline } from '../ButtonOutline';
import { Button } from '../Button';
import { HelpModal } from './HelpModal';

import { FixedFooterContainer } from './styles';

interface FixedFooterProps {
  onOpenNewTransactionModal(): void;
}

const FixedFooter: FC<FixedFooterProps> = ({ onOpenNewTransactionModal }) => {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const handleOpenHelpModal = useCallback(() => {
    setIsHelpModalOpen(true);
  }, []);

  const handleCloseHelpModal = useCallback(() => {
    setIsHelpModalOpen(false);
  }, []);

  return (
    <>
      <FixedFooterContainer>
        <div>
          <ButtonOutline type="button" onClick={handleOpenHelpModal}>
            Ajuda
          </ButtonOutline>
          <Button type="button" onClick={onOpenNewTransactionModal}>
            Agendar Consulta
          </Button>
        </div>
      </FixedFooterContainer>

      <HelpModal
        isOpen={isHelpModalOpen}
        onRequestClose={handleCloseHelpModal}
      />
    </>
  );
};

export { FixedFooter };
