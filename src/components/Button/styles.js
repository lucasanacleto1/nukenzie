import styled from "styled-components";

export const Content = styled.button`
  margin-top: 15px;
  width: ${(props) => props.width};
  height: 32px;
  background: ${(props) => props.backgroundColor};
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  /* transition: 0.5s; */
  /* :hover {
    background: var(--color-primary);
    transition: 0.5s;
  } */
  /* :focus {
    background: var(--color-primary-Focus);
  } */
`;
