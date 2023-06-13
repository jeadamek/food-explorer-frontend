import 'react-toastify/dist/ReactToastify.css'; 
import { createGlobalStyle } from 'styled-components';
import { device } from '../breakpoints/devices';

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

  .sr-only {
  position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden; 
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; 
    border-width: 0;
  }


  label, input, select, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 100%;
    font-weight: 400;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  select {
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  /* FONT STYLES */

  h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;  
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 20px;  
  }

  h3 {
    font-size: 14px;  
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }

  button {
    transition: background-color 0.3s ease;
  }

  .primary {
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

  .secondary {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: solid 0.5px ${({ theme }) => theme.COLORS.DARK_800};

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border: solid 0.5px ${({ theme }) => theme.COLORS.CAKE_200_TRANSPARENCY}; 
    }

    &:active {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
      cursor: auto;
    }
  }

  .no-scroll{
    overflow: hidden;
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

  @media ${device.laptop} {
    h1 {

    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
    }
  }
`;  