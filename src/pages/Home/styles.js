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
    max-width: 70rem;
    min-width: 32rem;

    margin: 0 auto;

    > section {
      margin-bottom: 2.4rem;

      > h2 {
        margin-bottom: 2.4rem;
      }
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

    .dish-not-found {
      font-size: 2.4rem;
      text-align: center;
      margin-top: 5rem;
    }
  }

  @media ${device.laptop} {
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      max-width: 104rem;
      padding: 3.2rem 4rem;

      > section {
        margin-bottom: 4.8rem;
      }
    }
  }

  @media ${device.laptopL} {
    > main {
      max-width: 122rem;
      padding: 3.2rem 5rem;
    }
  }
`;

export const Banner = styled.header`
  .banner {
    margin-bottom: 6.2rem;

    position: relative;

    > img {
      width: 100%;
      margin-bottom: 12rem;
    }
  }

  .banner-info {
    width: 100%;
    height: 15rem;

    background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;

    border-radius: .8rem;
  }   

  .banner-title {
    > h1 {
      font-size: 2.4rem;
      margin-bottom: .8rem;
    }

    > span {
      font-size: 1.2rem;
    }
  }

  @media ${device.tablet} {
    .banner-title {
      > h1 {
        font-size: 3.2rem;
      }

      > span {
        font-size: 1.4rem;
      }
    }
  }

  @media ${device.laptop} {
    .banner {
      display: flex;
      align-items: center; 
      gap: 1.2rem;

      > img {
        position: relative;
        left: -50px;

        width: 632px;
        
        margin-bottom: 0;
      }
    }

    .banner-info {
      height: 26rem;    

      justify-content: flex-end;

      padding-right: 3rem;

      z-index: -1;
    }   

    .banner-title {
      max-width: 40rem;

      > h1 {
        font-size: 3.6rem;
      }
    }
  }

  @media ${device.laptopL} {
    .banner {
      > img {
        left: -55px;
      }
    }

    .banner-info {
      padding-right: 10rem;
    }   

    .banner-title {
      max-width: 60rem;

      > h1 {
        font-size: 4rem;
      }
    }
  }
`;