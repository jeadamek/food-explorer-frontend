import styled from "styled-components";
import { device } from "../../breakpoints/devices";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 160%;

  > button {
    background: transparent;
    border: none;

    width: 3.6rem;
    height: 3.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    :hover {
      opacity: 0.5;
    }

    :active {
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      opacity: 1;
    }

    > img {
      width: 2.2rem;
      height: 2.2rem;
    }
  }

  @media ${device.laptop} {
    height: 3.2rem;
    font-size: 2rem;

    >button {
      height: 3.2rem;
      width: 3.2rem;

      > img {
        width: 1.8rem;
        height: 1.8rem;
      }
    }

    /* >span {
      font-size: 2rem;
    } */
  }
`;