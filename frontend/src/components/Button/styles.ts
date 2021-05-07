import styled from 'styled-components';

export const ButtonContainer = styled.button`
  height: 2.5rem;
  border: 0;
  border-radius: 0.5rem;

  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.125rem;
  letter-spacing: 0.063rem;
  color: var(--white);
  background-color: var(--blue);

  transition: background-color 0.2s;

  &:hover {
    background-color: var(--blue-dark);
  }
`;
