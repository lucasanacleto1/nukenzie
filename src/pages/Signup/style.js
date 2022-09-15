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
  width: 295.83px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* background: var(--grey-4); */
`;

export const Form = styled.form`
  background-color: var(--grey-3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 33.5803px 17.5897px;
`;

export const Header = styled.div`
  margin-bottom: 10px;
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: transparent;
  img {
    background: transparent;
  }
  button {
    width: 79.54px;
    height: 25.58px;
    background: var(--grey-3);
    border: none;
    border-radius: 4px;
  }
`;

export const SelectContent = styled.div`
  margin-top: 10px;
  background: transparent;
  label {
    background: transparent;
    margin-left: 8px;
  }

  select {
    margin-top: 5px;
    transition: 0.5s;
    width: 100%;
    padding: 0.8rem;
    background: var(--grey-2);
    border-radius: 4px;
    width: 100%;

    transition: 0.5s;
    border: 1.5px solid var(--grey-3);
    :hover {
      cursor: pointer;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    color: var(--grey-0);
  }
  p {
    color: var(--grey-1);
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
  }
`;
