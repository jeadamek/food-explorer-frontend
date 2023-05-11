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