import styled from "styled-components";
import { device } from "../../breakpoints/devices";

export const Container = styled.footer`
  grid-area: footer;

  width: 100%;
  height: 7.7rem;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    height: 1.8rem;
  }

  > span {
    text-align: right;
  } 

  @media ${device.mobileM} {
    padding: 0 2.5rem;
    font-size: 1.2rem;
  }

  @media ${device.tablet} {
    > img {
      height: 2.5rem;
    }
  }

  @media ${device.laptop} {
    padding: 0 8rem;
    font-size: 1.4rem;

    > img {
      height: 3rem;
    }
  }

  @media ${device.laptopL} {
    padding: 2.4rem 12.3rem;
  }
`;
