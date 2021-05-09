import styled from 'styled-components';

interface AccordionContainerProps {
  isExpanded: boolean;
}

const getAccordionQuestionColor = (isExpanded: boolean) => {
  return isExpanded ? 'var(--salmon-light)' : 'var(--gray-dark)';
};

export const AccordionContainer = styled.div<AccordionContainerProps>`
  display: flex;
  flex-direction: column;

  + div {
    border-top: 1px solid var(--gray);
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    height: 2.75rem;
    border: 0;
    padding: 0;
    background-color: transparent;

    &:hover {
      h4 {
        color: var(--salmon-light);
      }
    }

    h4 {
      margin-right: 1rem;
      font-size: 1rem;
      font-weight: ${({ isExpanded }) => (isExpanded ? '600' : '400')};
      color: ${({ isExpanded }) => getAccordionQuestionColor(isExpanded)};

      @media (max-width: 768px) {
        font-size: 0.875rem;
      }
    }
  }

  p {
    padding-right: 1rem;
    margin-bottom: 1rem;
    font-size: 0.875rem;
    color: var(--gray-dark);
  }
`;
