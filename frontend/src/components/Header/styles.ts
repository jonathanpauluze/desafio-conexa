import styled from 'styled-components';

interface HeaderContainerProps {
  isLoggedIn: boolean;
}

const setMobileJustifyForHeaderContainer = ({
  isLoggedIn,
}: HeaderContainerProps) => {
  return isLoggedIn ? 'space-between' : 'center';
};

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1366px;
  height: 3.563rem;
  padding: 0 1rem;

  background-color: var(--offwhite);
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    justify-content: ${setMobileJustifyForHeaderContainer};
  }
`;

export const HeaderMessage = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 600;

    @media (max-width: 768px) {
      display: none;
    }
  }

  button {
    margin-left: 1rem;
  }
`;
