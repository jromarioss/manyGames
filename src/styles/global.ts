import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;

    color: ${props => props.theme["GRAY_200"]};
    background-color: ${props => props.theme["ZINC_800"]};
  }
`;