import styled from "styled-components";

export const Container = styled.div`
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
  width: 369px;

  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--grey-4);
`;

export const Form = styled.form`
  background-color: var(--grey-3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 33.6911px 17.6477px;
`;

export const Header = styled.div`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: transparent;
  img {
    background: transparent;
  }
  button {
    width: 79.54px;
    height: 25.58px;
    /* padding: 0 16px; */
    background: var(--grey-3);
    border: none;
    border-radius: 4px;
  }
`;

export const SelectContent = styled.div`
  margin-top: 15px;
  background: transparent;
  label {
    background: transparent;
    margin-left: 8px;
  }

  select {
    transition: 0.5s;
    width: 100%;
    padding: 0.8rem;
    background: var(--grey-2);
    border-radius: 4px;
    padding: 0.8rem;
    width: 100%;

    transition: 0.5s;
    border: 1.5px solid var(--grey-3);
    :hover {
      cursor: pointer;
    }
  }
`;

export const SignUpContent = styled.div`
  padding-top: 80px;
  width: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;

  span {
    color: var(--grey-1);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
  }

  button {
    margin-top: 20px;
    height: 48px;
    background: var(--grey-1);
    border: 1.2182px solid #868e96;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;
