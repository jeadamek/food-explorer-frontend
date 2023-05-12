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

  body, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  label, input, select, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 400;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  select {
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  /* FONT STYLES */

  h1 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  button.primary {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
      }

      &:active {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      }

      &:disabled {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
        cursor: auto;
      }
  }

  button.secondary {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    &:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }

    &:active {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
      cursor: auto;
    }
  }

    /* SCROLLBAR STYLE */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.COLORS.CAKE_100} ${({ theme }) => theme.COLORS.DARK_100};
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: .6rem;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.CAKE_100};
    border-radius: 1rem;
    border: none;
  }
`;  