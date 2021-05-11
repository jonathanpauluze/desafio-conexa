import styled from 'styled-components';

interface HeaderContentProps {
  isLoggedIn: boolean;
}

const setMobileJustifyForHeaderContent = ({
  isLoggedIn,
}: HeaderContentProps) => {
  return isLoggedIn ? 'space-between' : 'center';
};

export const HeaderContainer = styled.header`
  background-color: var(--offwhite);
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.05);
`;

export const HeaderContent = styled.div<HeaderContentProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1366px;
  height: 3.563rem;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    justify-content: ${setMobileJustifyForHeaderContent};
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
