import styled from 'styled-components';

export const AppointmentsContainer = styled.main`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 1rem;

  h1 {
    margin: 2rem 0 0 1rem;
    font-size: 3rem;
    font-weight: bold;
    color: var(--blue-dark);

    @media (max-width: 768px) {
      margin-left: 0;
      font-size: 1.75rem;
    }
  }
`;
