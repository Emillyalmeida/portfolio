import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body{
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  font-family: 'Roboto Mono', monospace;
  height: 100vh;
  width: 100vw;
  list-style: none;
    
}
h1,h2,h3,h4{
    font-weight: 700;
}
button{
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;
}
/* ::-webkit-scrollbar {
display: none;
} */
`;
