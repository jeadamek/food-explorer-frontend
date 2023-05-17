import styled from "styled-components";
import { device } from "../../breakpoints/devices";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  height: 11.4rem;
  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  #nav-mobile {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 114px auto;

    position: fixed;
    top: 0;
    left: 0;  

    z-index: 9999;

    transition: transform .3s ease-in-out;
    transform: translateX(-100%);

    > header {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      padding: 2.8rem 2.8rem 0;

      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 24px;
      line-height: 25px;

      > svg {
        cursor: pointer;
      }
    }

    > nav {
      padding: 2.8rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_400};

      > div {
        margin-bottom: 3.6rem;
      }

      > ul {
        list-style: none;

        li {
          padding: 1rem;
          border-bottom: solid 1px ${({ theme }) => theme.COLORS.DARK_1000};

          > a {
            font-weight: 300;
            font-size: 24px;
            line-height: 140%;

            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            display: block;
            cursor: pointer;

            &:hover {
              color: ${({ theme }) => theme.COLORS.CAKE_200};;
            }
          }
        }
      }
    }

    @media ${device.laptop} {
      display: none;
    }
  }

  #nav-mobile.active {
    transform: translateX(0);
  }

  .desktop-search {
    display: none;
  }

  @media ${device.laptop} {
    height: 96px;

    padding: 2.4rem 8rem;
    align-items: center;
    gap: 3.2rem;

    .desktop-search {
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

export const Brand = styled(Link)`
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

export const NavHeader = styled(Link)`
  display: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  text-decoration: none;
  
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

    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
    
    @media ${device.laptop} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;