import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono');

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    text-align: center;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    font-family: 'Roboto Mono', monospace;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

`;

export const theme = {
  primary: 'rgb(0, 56, 130)',
  secondary: 'rgb(247, 181, 18)',
  darksecondary: 'rgb(107, 48, 13)',
  accent: 'rgb(173, 38, 36)',

  darkgreen: 'rgb(0,230,118)',
  lightgreen: 'rgb(180,241,87)',
  black: 'rgb(33,33,33)',
  grey: 'rgb(196,196,196)',
  white: 'rgb(255,255,255)',
};
