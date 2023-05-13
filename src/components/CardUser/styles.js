import styled from "styled-components";
import { device } from "../../breakpoints/devices";

export const Container = styled.a`
  height: 292px;
  width: 210px;
  
  padding: 1.6rem 2.4rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  border: solid 0.5px ${({ theme }) => theme.COLORS.DARK_300};  

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  border-radius: .5rem;

  cursor: pointer;

  > button {
    background: none;
    border: none;

    width: fit-content;
    height: fit-content;

    position: absolute;
    right: 16px;
    top: 16px;

    cursor: pointer;
  }

  > img {
    width: 88px;
  }

  > p { 
    display: none;
    
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;

    text-align: center;
  }

  > span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .add-cart {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }

  &:hover {
    filter: drop-shadow(0px 0px 8px ${({ theme }) => theme.COLORS.CAKE_200_TRANSPARENCY});
    border: solid 0.5px ${({ theme }) => theme.COLORS.CAKE_200_TRANSPARENCY};  
  }

  @media ${device.laptop} {
    height: 462px;
    width: 304px;

    padding: 2.4rem;
    
    > img {
      width: 176px;
    }

    > p {
      display: block;
    }

    > span {
      font-size: 3.2rem;
      line-height: 160%;
    }

    .add-cart {
      flex-direction: row;
      align-items: center;
      gap: 1.6rem;
    }
  }
`;