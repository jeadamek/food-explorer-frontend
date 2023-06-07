import styled from "styled-components";
import { device } from "../../breakpoints/devices";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 40.4rem;


  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > h2 {
    font-size: 32px;
    line-height: 140%;
  }

  > div {
    display: flex;
    flex-direction: column;
  } 

  .dish-wrapper {
    width: 100%;

    padding: 1.6rem 0;
    
    display: flex;
    align-items: center;
    gap: 1.6rem;

    img {
      height: 7.2rem;
      width: 7.2rem;
    }

    > div {
      width: 100%;
    }
  }

  .dish-info {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    > h3 {
      font-size: 2rem;
      line-height: 160%;
    }

    > span {
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  .dish-quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1rem;

    > button {
      border: none;
      background: none;

      color: ${({ theme }) => theme.COLORS.TOMATO_400};

      cursor: pointer;
      
      opacity: 1;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .total {
    display: flex;
    gap: 1.6rem;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > strong {
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.MINT_100};
    }
  }

  > button {
    width: 21.6rem;
    align-self: flex-end;
    margin-top: 1.6rem;
  }

  @media ${device.laptop} {
    min-width: fit-content;
    
    margin: 0;

    > div {
      max-height: 41.6rem;
      min-height: fit-content;
      padding-right: 1rem;

      overflow-y: scroll;
    }

    > button {
      display: none;
    }
  }
`;