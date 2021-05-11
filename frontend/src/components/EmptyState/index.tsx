import { FC, ReactNode } from 'react';

import { EmptyStateContainer } from './styles';

interface EmptyStateProps {
  children: ReactNode;
}

const EmptyState: FC<EmptyStateProps> = ({ children }) => {
  return (
    <EmptyStateContainer>
      <p>{children}</p>
      {/* <img src={certificatesImg} alt="" aria-hidden="true" /> */}
    </EmptyStateContainer>
  );
};

export { EmptyState };
