import styled from "styled-components";
import { device } from "../../breakpoints/devices";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 160%;

  > button {
    background: transparent;
    border: none;

    width: 2.4rem;
    height: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }

    &:active {
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      opacity: 1;
    }
  }

  @media ${device.laptop} {
    gap: 1.6rem;
    font-size: 2rem;
  }
`;