import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    outline: none;
    color: #fff;
  }

`;