import { FC, ReactNode } from 'react';

import { ButtonContainer } from './styles';

interface ButtonOutlineProps {
  children: ReactNode;
}

const ButtonOutline: FC<ButtonOutlineProps> = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export { ButtonOutline };
