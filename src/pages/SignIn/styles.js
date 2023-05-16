import styled from "styled-components";
import { device } from "../../breakpoints/devices";

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

  > h2 {
    display: none;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

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