import styled from 'styled-components';

export const HelpModalTitle = styled.h3`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;

    @media (max-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }

  strong {
    display: inline-block;
    margin-left: 1rem;
    font-size: 2rem;
    font-weight: bold;
    color: var(--blue-dark);

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
`;

export const HelpModalContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 40vh;
  margin-top: 2rem;
  overflow: auto;
`;
