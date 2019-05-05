import React from "react";
import { createGlobalStyle } from "styled-components/macro";
import { Reset } from "styled-reset";

const Style = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  #root {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    padding: 20px 40px;
    margin: 0;
    background-color: #282c34;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  #speak-line {
  display: flex;
  justify-content: center;
  }
`;

const GlobalStyle = () => (
  <>
    <Reset />
    <Style />
  </>
);

export default GlobalStyle;
