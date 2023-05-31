import styled from "styled-components";
import { device } from "../../breakpoints/devices";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    grid-area: content;
    width: 100%;

    padding: 4rem 2.8rem;
    margin: 0 auto;
  }

  @media ${device.laptop} {
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      padding: 3.4rem 8rem 15rem;
    }
  }

  @media ${device.laptopL} {
    > main {
      padding: 3.4rem 12.3rem 15rem;  
    }
  }
`;