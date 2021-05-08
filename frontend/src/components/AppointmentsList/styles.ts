import styled from 'styled-components';

export const AppointmentListContainer = styled.div`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
`;

export const AppointmentListCounter = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25rem;
  color: var(--gray-dark);
`;

export const AppointmentListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  div {
    p {
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      font-size: 1rem;
      line-height: 1.25rem;
      color: var(--gray-dark);
    }

    span {
      font-size: 0.75rem;
      line-height: 1.25rem;
      color: var(--gray-dark);
    }
  }
`;
