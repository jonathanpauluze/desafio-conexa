import styled from 'styled-components';

import certificatesImg from '../../assets/certificates-bg.svg';
import plantImg from '../../assets/plant-bg.svg';

export const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 22.5rem;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    min-height: 13.75rem;
  }

  p {
    position: relative;
    max-width: 10rem;
    font-size: 1.125rem;
    font-weight: bold;
    text-align: center;
    line-height: 1.5em;
    color: var(--gray-medium);

    &::before {
      content: url(${certificatesImg});
      position: absolute;
      top: -6.25rem;
      right: -6.25rem;
      display: block;

      @media (max-width: 768px) {
        top: -5rem;
        right: -3.75rem;
      }
    }

    &::after {
      content: url(${plantImg});
      position: absolute;
      bottom: -6.75rem;
      left: -6.25rem;
      display: block;

      @media (max-width: 768px) {
        bottom: -6.75rem;
        left: -4rem;
      }
    }
  }
`;
