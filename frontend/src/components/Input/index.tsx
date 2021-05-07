import { FC, InputHTMLAttributes, useState, useCallback } from 'react';
import { FiHelpCircle, FiEye, FiEyeOff } from 'react-icons/fi';

import {
  InputContainer,
  LabelContainer,
  Tooltip,
  TooltipText,
  InputWrapper,
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  tooltip?: string;
}

const Input: FC<InputProps> = ({
  id,
  type = 'text',
  label,
  tooltip,
  ...props
}) => {
  const [isShowingContent, setIsShowingContent] = useState(false);

  const toggleShowContent = useCallback(() => {
    setIsShowingContent(!isShowingContent);
  }, [isShowingContent]);

  return (
    <InputContainer>
      <LabelContainer htmlFor={id}>
        <p>{label}</p>

        {tooltip ? (
          <Tooltip>
            <FiHelpCircle />
            <TooltipText>{tooltip}</TooltipText>
          </Tooltip>
        ) : null}
      </LabelContainer>

      <InputWrapper>
        <input type={isShowingContent ? 'text' : type} id={id} {...props} />
        {type === 'password' ? (
          <button type="button" onClick={toggleShowContent}>
            {isShowingContent ? <FiEye /> : <FiEyeOff />}
          </button>
        ) : null}
      </InputWrapper>
    </InputContainer>
  );
};

export { Input };
