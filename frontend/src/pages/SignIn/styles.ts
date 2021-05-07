import styled from 'styled-components';

export const SignInContainer = styled.main`
  display: flex;
  height: calc(100vh - 3.563rem);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`;

export const SignInTitleWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex: none;
    margin-top: 2.188rem;
    margin-bottom: 2.75rem;
  }

  h1 {
    font-family: var(--font-secondary);
    font-size: 3.25rem;
    font-weight: bold;
    line-height: 3.75rem;
    color: var(--blue-dark);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  img {
    margin-top: 4.188rem;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const SignInFormWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex: none;
  }
`;
