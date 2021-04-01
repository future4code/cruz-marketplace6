import styled, { createGlobalStyle, injectGlobal } from "styled-components";
/* 
injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;500;700&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: 'Recursive', sans-serif;
  }

  h1 {
    font-family: Montserrat;
  }
`; */

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rajdhani', sans-serif;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 10px;
  
  ${'' /* @media screen and (max-width: 1024px) {
  } */}
`;

export default GlobalStyle;
