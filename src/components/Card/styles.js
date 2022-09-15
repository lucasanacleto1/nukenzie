import styled from "styled-components";

export const Container = styled.div`
  transition: 0.5s;
  border-radius: 4px;
  width: 100%;
  background: var(--grey-4);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey-0);
  }

  p {
    text-align: right;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey-1);
  }
  :hover {
    background: var(--grey-2);
    cursor: pointer;
    p {
      color: var(--grey-0);
    }
  }
`;

export const ContainerUpdate = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SaveButton = styled.button`
  background: var(--color-primary-Negative);
  margin-top: 15px;
  height: 32px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  :active {
    background: var(--color-primary-Focus);
  }
`;

export const DeleteButton = styled.button`
  background: var(--grey-1);
  margin-top: 15px;
  height: 32px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  color: #fff;
  :active {
    background: var(--grey-2);
  }
`;

export const Transparent = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 18, 20, 0.1);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  animation-duration: 0.5s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      margin-left: 100px;
    }

    to {
      margin-left: 0%;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  padding: 15px 22px 32px;
  background-color: var(--grey-3);
  label {
    margin-top: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: var(--grey-0);
  }
`;
export const Input = styled.div`
  margin-top: 5px;
  background: var(--grey-2);
  border-radius: 4px;
  padding: 0.8rem;
  width: 100%;
  transition: 0.5s;
  border: 1px solid var(--grey-3);

  :focus-within {
    border: 1px solid var(--grey-0);
  }

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
export const Header = styled.div`
  border-radius: 4px 4px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--grey-2);

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
  }
  button {
    color: var(--grey-1);
    border: none;
    background: transparent;
  }
`;

export const Select = styled.select`
  :focus-within {
    border: 1px solid var(--grey-0);
  }
  margin-top: 5px;
  transition: 0.5s;
  width: 100%;
  padding: 0.8rem;
  background: var(--grey-2);
  border-radius: 4px;
  width: 100%;

  transition: 0.5s;
  border: 1px solid var(--grey-3);
  :hover {
    cursor: pointer;
  }
`;
