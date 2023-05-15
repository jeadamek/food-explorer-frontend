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
    padding: 3.6rem 1rem 5.6rem;

    width: 100%;
    max-width: 55rem;
    margin: 0 auto;

    header > h1 {
      margin-top: 2.2rem;
      margin-bottom: 3.6rem;
    }
  }

  @media ${device.laptop} {
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      max-width: 112rem;
      padding: 2.4rem 3rem 12rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .dish-image {
    > label > div {
      width: 100%;
      height: 4.8rem;

      padding: 12px 32px;
      margin-top: 1.2rem;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      border-radius: .5rem;

      display: flex;
      align-items: center;
      gap: .8rem;

      cursor: pointer;
      
      > input {
        display: none;
      }
    }
  }

  .dish-ingredients{
    > span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      line-height: 100%;
      font-weight: 400;
      outline: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-bottom: 1.6rem;
    }

    > div {
      width: 100%;
      
      margin-top: 1.2rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};

      border-radius: .5rem;

      padding: .8rem;

      display: flex;
      column-gap: 1.6rem;
      row-gap: .8rem;
      flex-wrap: wrap;
    }
  }

  .buttons {
    width: 100%;

    display: flex;
    flex-direction: row;
    gap: 3.2rem
  }

  @media ${device.laptop} {
    gap: 3.2rem;

    .wrapper {
      display: flex;
      flex-direction: row; 
      gap: 3.2rem;
    }

    .dish-image {
      label > div {
        width: 240px;  
      }
    }

    .dish-name {
      width: 100%;
    }

    .dish-category {
      > select {
        width: 36.4rem;
      }
    }

    .dish-ingredients {
      width: 100%;
    }

    .dish-price {
      > div {
        width: 251px;
      }
    }

    .buttons {
      width: fit-content;
      align-self: self-end;
    }
  }
`;