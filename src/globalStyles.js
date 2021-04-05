import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rajdhani', sans-serif;
    text-decoration: none;
    list-style: none;
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
