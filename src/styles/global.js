import { createGlobalStyle } from 'styled-components';
// import { device } from '../breakpoints/devices';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
    -webkit-font-smoothing: antialiased;
  }

  /* mobile */
  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;  