import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 10px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: transparent;

  img {
    background: transparent;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    height: 32px;
    background: var(--grey-3);
    border: none;
    border-radius: 4px;
  }
`;
