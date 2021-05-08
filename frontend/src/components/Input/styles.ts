import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    height: 1.75rem;
    border: 0;
    border-bottom: 2px solid var(--gray);

    &::placeholder {
      padding: 0.5rem 0;
      font-size: 0.875rem;
      font-weight: 300;
      font-style: italic;
      color: var(--gray-medium);
    }

    &[type='password'] {
      padding-right: 1rem;
    }
  }

  button {
    position: absolute;
    right: 0;
    top: 0.875rem;
    transform: translateY(-50%);

    padding: 0;
    border: 0;
    background-color: transparent;

    svg {
      color: var(--gray-medium);
    }
  }
`;

export const LabelContainer = styled.label`
  display: flex;

  p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--gray-dark);
  }
`;

export const Tooltip = styled.div`
  display: flex;
  position: relative;
  margin-left: 0.5rem;

  &:hover {
    span {
      visibility: visible !important;
    }
  }

  svg {
    color: var(--gray-medium);
  }
`;

export const TooltipText = styled.span`
  position: absolute;
  bottom: 150%;
  left: 50%;

  width: max-content;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  visibility: hidden;
  background-color: black;

  text-align: center;
  color: #fff;

  transform: translate3d(-50%, 0, 0);
  z-index: 1;

  @media (max-width: 768px) {
    left: 150%;
    bottom: unset;
    transform: translate3d(0, -50%, 0);
    width: 150px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;

    @media (max-width: 768px) {
      content: '';
      position: absolute;
      top: 50%;
      right: 100%;
      left: unset;
      border-color: transparent black transparent transparent;
    }
  }
`;

export const Error = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #ff3333;
`;
