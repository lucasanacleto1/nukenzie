import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  /* background-color: var(--grey-4); */
  color: var(--grey-0);
  
}
body, input, button {
    font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}

:root {
  --color-primary: #FF577F;
  --color-primary-Focus: #FF427F;
  --color-primary-Negative: #59323f;

  --grey-4: #121214;
  --grey-3: #212529;
  --grey-2: #343B41;
  --grey-1: #868E96;
  --grey-0: #F8F9FA;

  --success: #3FE864;
  --negative: #E83F5B;

  --toastify-color-dark: var(--grey-2);
}
`;

export const primary = "#FF577F";
export const negative = "#59323f";
