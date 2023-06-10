import styled from "styled-components";
import { device } from "../../breakpoints/devices";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 318px;
  width: 210px;

  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  border: solid 0.5px ${({ theme }) => theme.COLORS.DARK_500};  

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  border-radius: .5rem;

  transition: filter 0.3s ease-in;
  transition: border 0.3s ease-in;

  cursor: pointer;

  > button {
    background: none;
    border: none;

    width: fit-content;
    height: fit-content;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    position: absolute;
    right: 16px;
    top: 16px;

    transition: color 0.3s ease-in;
    transition: filter 0.3s ease-in;

    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      filter: brightness(5);
    }
  }

  .add-cart {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
  }

  &:hover {
    filter: drop-shadow(0px 0px 8px ${({ theme }) => theme.COLORS.CAKE_200_TRANSPARENCY});
    border: solid 0.5px ${({ theme }) => theme.COLORS.CAKE_200_TRANSPARENCY};  
  }

  @media ${device.laptop} {
    height: 462px;
    width: 304px;

    padding: 2.4rem;
    
    > button {
      right: 20px;
      top: 20px;
    }

    > img {
      width: 176px;
    }

    > p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    > span {
      font-size: 3.2rem;
      line-height: 160%;
    }

    .add-cart {
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const DishInfo = styled(Link)`
  width: 100%;

  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;


  > img {
    width: 88px;
  }

  > h3 {
    text-align: center;
    max-width: 18ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    transition: filter 0.3s ease-in;

    &::after {
      content: ' >';
    }

    &:hover {
      filter: opacity(0.5);
    }
  }

  > p { 
    display: none;
    
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;

    text-align: center;

    min-height: 4.5rem;
  }

  > span {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media ${device.laptop} {
    
    > button {
      right: 20px;
      top: 20px;
    }

    > img {
      width: 176px;
    }

    > p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    > span {
      font-size: 3.2rem;
      line-height: 160%;
    }
  }
`;