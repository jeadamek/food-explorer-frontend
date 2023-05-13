import styled from 'styled-components'
import { device } from '../../breakpoints/devices'

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
    padding: 3.6rem 0 6rem;

    width: 31.6rem;
    margin: 0 auto;
  }

  @media ${device.laptop} {
    > main {
      width: 98rem;
      padding: 2.4rem 0 15.5rem;
    }
  }

  @media ${device.desktop} {
    > main {
      width: 112.4rem;
    }
  }
`

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  .ingredients {
    margin: 2.4rem 0 4.8rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.4rem;
  }

  @media ${device.laptop} {
    text-align: left;

    flex-direction: row;
    gap: 4.2rem;

    .ingredients {
      justify-content: left;
      flex-wrap: wrap;
      gap: 1.2rem;
    }
  }
`

export const DishPhoto = styled.div`
  margin: 1.6rem auto;

  > img {
    width: 26.4rem;
  }

  @media ${device.laptop} {
    margin: 4.2rem auto;

    > img {
      width: 39rem;
    }
  }
`

export const DishInfo = styled.div`
  > h1 {
    font-size: 2.8rem;
    margin-bottom: 2.4rem;
  }

  > p {
    font-size: 1.6rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  @media ${device.laptop} {
    > h1 {
      font-size: 4rem;
      margin-bottom: 2.4rem;
    }

    > p {
      font-size: 2.4rem;
    }
  }
`
