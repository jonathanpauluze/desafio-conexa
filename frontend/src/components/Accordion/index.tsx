import { FC, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { AccordionContainer } from './styles';

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: FC<AccordionProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AccordionContainer isExpanded={isExpanded}>
      <button type="button" onClick={() => setIsExpanded(!isExpanded)}>
        <h4>{question}</h4>
        {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isExpanded && <p>{answer}</p>}
    </AccordionContainer>
  );
};

export { Accordion };
