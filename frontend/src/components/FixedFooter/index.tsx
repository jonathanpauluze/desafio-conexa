import { FC } from 'react';

import { ButtonOutline } from '../ButtonOutline';
import { Button } from '../Button';

import { FixedFooterContainer } from './styles';

const FixedFooter: FC = () => {
  return (
    <FixedFooterContainer>
      <div>
        <ButtonOutline type="button">Ajuda</ButtonOutline>
        <Button type="button">Agendar Consulta</Button>
      </div>
    </FixedFooterContainer>
  );
};

export { FixedFooter };
