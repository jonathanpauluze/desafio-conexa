import styled from 'styled-components';

export const FixedFooterContainer = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;

  @media (max-width: 768px) {
    border-top: 2px solid var(--gray);
  }

  div {
    width: 100%;
    height: 4.5rem;
    max-width: 1366px;
    padding: 0 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--offwhite);
  }
`;
