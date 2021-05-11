import styled from 'styled-components';

export const SignOutModalTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--blue-dark);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const SignOutModalButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 4rem;

  button {
    width: 4rem;

    + button {
      margin-left: 1rem;
    }
  }
`;
