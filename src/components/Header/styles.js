import styled from "styled-components";
import { device } from "../../breakpoints/devices";


export const Container = styled.header`
  grid-area: header;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  height: 11.4rem;
  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .input-header {
    display: none;
  }

  @media ${device.laptop} {
    height: 96px;

    padding: 2.4rem 8rem;
    align-items: center;
    gap: 3.2rem;

    .input-header {
      margin: 0;
      display: flex;
    }
  }

  @media ${device.desktop} {
    padding: 2.4rem 12.3rem;
  }
`;

export const Hamburguer = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;

  cursor: pointer;

  @media ${device.laptop} {
    display: none;
  }
`

export const Brand = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;

  > img {
    width: 16rem;
  }

  @media ${device.laptop} {
    > img {
      width: 18.6rem;
    }
  }
`;

export const MobileOrder = styled.button`
  background: none;
  border: none;

  width: 3.5rem;
  height: 2.6rem;

  position: relative;
  
  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  > img {
    height: 2.2rem;
  }

  > div {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    border-radius: 50%;

    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -9px;
    right: 0;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export const ButtonHeader = styled.button`
  display: none;
  border: none;
  
  min-width: 216px;
  height: 4.8rem;
  padding: 1.2rem 4.6rem;

  border-radius: .5rem;

  cursor: pointer;

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
  }
`;

export const Logout = styled.button`
    display: none;

    border: none;
    background: none;
    text-align: right;
    height: 48px;
    min-width: 40px;

    cursor: pointer;

    > svg > path {
      fill: pink;
    }

    &:hover {
      opacity: 0.5;
    }
    
    @media ${device.laptop} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;