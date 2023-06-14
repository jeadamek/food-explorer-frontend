import styled, { keyframes } from "styled-components";
import { device } from "../../breakpoints/devices";

const LogoAppear = keyframes`
  from {
    filter: opacity(0);
    transform: translateY(-100px);
  }
  to {
    filter: opacity(1);
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    filter: opacity(0);
  }
  to {
    filter: opacity(1);
  }
`;

const InputField = keyframes`
  0% {
    filter: opacity(0);
    transform: translateX(-30px);
  }
  50% {
    filter: opacity(1);
  }
  100% {
    transform: translateX(0);

  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  max-width: 70rem;

  margin: 0 auto;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  gap: 7.4rem;

  align-items: center;
  justify-content: center;

  > img {
    width: 100%;
    max-width: 32.4rem;

    animation: ${LogoAppear} 1s ease-in-out;
  }

  .input-wrapper {
    width: 100%;
  }

  @media ${device.laptop} {
    max-width: 110rem;

    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  align-items: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  animation: ${fadeIn} 1s ease-in-out;

  > h2 {
    display: none;
    animation: ${fadeIn} 2s ease-in-out;
  }

  .input-wrapper:first-child {
    animation: ${InputField} .5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  }

  > label:nth-child(2), div:nth-child(2) {
    animation: ${InputField} 1s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  }

  > label:nth-child(3), div:nth-child(1) {
    animation: ${InputField} 1.5s easecubic-bezier(0.45, 0.05, 0.55, 0.95);
  }

  > button, a {
    animation: ${fadeIn} 1.5s ease-in-out;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-decoration: none;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;

    &:hover {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  @media ${device.laptop} {
    width: 47.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    padding: 6.4rem;

    border-radius: 1.6rem;

      > h2 {
        display: block;
      }

    > button {
      width: 100%;
    }
  }
`;