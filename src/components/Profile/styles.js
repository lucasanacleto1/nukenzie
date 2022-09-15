import styled from "styled-components";

export const Transparent = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 18, 20, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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
export const Container = styled.div``;
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
export const ContainerCard = styled.div`
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
  background: var(--grey-4);
  width: 80%;
`;
export const UserDescription = styled.div`
  height: 118px;
  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey-0);
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    color: var(--grey-1);
  }
`;

export const TechContainer = styled.div`
  margin-top: 10px;
  transition: 0.5s;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--grey-3);
  border-radius: 4px;
  padding: 22px 19px;
  padding: 0.8rem;
`;

export const TechHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }
`;
