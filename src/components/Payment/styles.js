import styled from "styled-components";
import { device } from "../../breakpoints/devices";

export const Container = styled.div`
  width: 100%;
  max-width: 53rem;

  margin: 0 auto;

  > h2 {
    font-size: 32px;
    line-height: 140%;

    margin-bottom: 3.2rem;
  }


  @media ${device.laptop} {
    margin: 0;
  }

  @media ${device.laptopL} {
    margin-right: 11rem; 
  }
`;

export const Content = styled.div`
  
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

  border-radius: .8rem;

  .buttons {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    
    display: flex;
    justify-content: space-between;

    > button:first-child {
      border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
      border-radius: .8rem 0 0 0;
    }

    > button:last-child {
      border-radius: 0 .8rem 0 0;
    }

    > button {
      width: 50%;
      height: 8rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: .8rem;

      background: transparent;
      border: none;

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;

      cursor: pointer;

      &.active {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }
  }

  .status {
    width: 100%;
    height: 38rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 3rem;

    > img {
      width: 16rem;
    }
    
    @media ${device.mobileL} {
      > img {
        width: 25rem;
      }
    }
  }
  
  .status > form {
    display: flex;
    flex-direction: column;
    gap: 3.6rem;

    .input-wrapper {
      width: 100%;

      input {
        height: 4.8rem;
        width: 100%;

        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: transparent;

        padding: 14px;
        margin-top: .8rem;

        border-radius: .5rem;

        &:placeholder {
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
        
        &:focus {
          border: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};
        }

        &.invalid {
          border: 2px solid ${({ theme }) => theme.COLORS.TOMATO_300};
        }

        &.valid {
          border: 2px solid ${({ theme }) => theme.COLORS.MINT_100};
        }
      }
    }

    .card-confirmation-wrapper {
      display: flex;
      gap: 1.6rem;
    }

    > button {
      width: 100%;
    }
  }

  .order-status-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    > span {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;

      text-align: center;
    }

    .loading {
      width: 104px;
      height: 104px;

      border: 4px solid rgba(0, 0, 0, 0.2);
      border-top: 4px solid ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;