import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--gray-dark);
  }

  select {
    width: 100%;
    height: 1.75rem;
    border: 0;
    border-bottom: 2px solid var(--gray);
    background-color: transparent;
  }
`;
