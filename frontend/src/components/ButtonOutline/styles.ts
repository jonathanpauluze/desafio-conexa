import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 0.438rem 1rem;
  border: 2px solid var(--blue);
  border-radius: 0.375rem;
  background-color: transparent;

  font-size: 12px;
  font-weight: bold;
  line-height: 1.125rem;
  letter-spacing: 0.063rem;
  color: var(--blue);

  transition: all 0.2s;

  &:hover {
    background-color: var(--blue);
    color: var(--white);
  }
`;
