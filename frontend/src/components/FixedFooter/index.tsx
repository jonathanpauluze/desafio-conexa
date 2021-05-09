import { FC } from 'react';

import { ButtonOutline } from '../ButtonOutline';
import { Button } from '../Button';

import { FixedFooterContainer } from './styles';

interface FixedFooterProps {
  onOpenNewTransactionModal(): void;
}

const FixedFooter: FC<FixedFooterProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <FixedFooterContainer>
      <div>
        <ButtonOutline type="button">Ajuda</ButtonOutline>
        <Button type="button" onClick={onOpenNewTransactionModal}>
          Agendar Consulta
        </Button>
      </div>
    </FixedFooterContainer>
  );
};

export { FixedFooter };
