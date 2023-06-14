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
    padding: 4rem 2rem;

    width: 100%;

    margin: 0 auto;

    > h1 {
      margin-bottom: 2.8rem;
    }

    .favorite-items {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 3.2rem;

      > p {
        font-size: 2.4rem;
        text-align: center;
        margin-top: 5rem;
      }

      .loading-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
        }

        .loading {
          width: 5rem;
          height: 5rem;
          align-items: center;
        }
    }
  } 

  @media ${device.laptop} {
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      padding: 3.4rem 8rem;

      > h1 {
        margin-bottom: 3.8rem;
        font-size: 3.2rem;
      }

      .favorite-items {
        flex-direction: row;

        > p {
          text-align: center;
          width: 100%;
        }
      }
    }
  }

  @media ${device.laptopL} {
    > main {
      padding: 3.4rem 12.5rem;
    }
  }
`;