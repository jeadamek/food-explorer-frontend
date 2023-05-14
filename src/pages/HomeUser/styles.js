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
    padding: 1.6rem 2rem;

    max-width: 40rem;
    margin: 0 auto;

    > section {
      margin-bottom: 2.4rem;

      > h2 {
        margin-bottom: 2.4rem;
      }
    }
  }

  @media ${device.tablet} {
    > main{
      max-width: 75rem;
    }
  }

  @media ${device.laptop} {
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      max-width: 112.2rem;
      padding: 0 5rem;

      > section {
        margin-bottom: 4.8rem;
      }
    }
  }
`;