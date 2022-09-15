import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  background-color: transparent;
  margin-top: 5px;
  transition: 0.5s;
  label {
    background-color: transparent;
    margin-left: 6px;
  }
`;

export const InputContainer = styled.div`
  margin-top: 5px;
  background: var(--grey-2);
  border-radius: 4px;
  padding: 0.8rem;
  width: 100%;
  transition: 0.5s;
  border: 1.5px solid var(--grey-3);

  :focus-within {
    border: 1.5px solid var(--grey-0);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--color-primary);
    `}

  input {
    width: 100%;
    height: 100%;
    background: var(--grey-2);
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey-0);

    &::placeholder {
      color: var(--grey-1);
    }
  }
`;

export const ErrorContent = styled.div`
  background-color: transparent;
  span {
    background: transparent;
    color: var(--negative);
  }
`;
