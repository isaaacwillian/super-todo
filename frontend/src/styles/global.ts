import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: black;
    color: white;
    -webkit-font-smoothing: antialiased;
    transition: all 1s;
  }
  button{
    cursor: pointer;
  }
`;
