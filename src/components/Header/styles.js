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

            transition: color 0.3s ease;

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

  @media ${device.laptopL} {
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
    height: auto;
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

  position: relative;
  
  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
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

export const NavHeaderAdmin = styled.nav`
  display: none;
  min-width: fit-content;

  a:first-child {
    min-width: fit-content;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 400;
    padding: 0 1rem;

    transition: color 0.3s ease-in;

    &:hover{
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }
`;

export const NavHeaderUser = styled.nav`
  display: none;

  .dropdown {
    position: relative;
    display: inline-block;

    z-index: 1;

    button {
      background: none;
      border: none;
      
      height: 48px;
      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.COLORS.CAKE_200};

      cursor: pointer;
    }
  }

  .dropdown-content {
    display: none;
    flex-direction: column;
    
    width: 20rem;
    
    position: absolute;
    left: -50px;

    background-color: ${({ theme }) => theme.COLORS.DARK_500};
  
    border: solid 1px ${({ theme }) => theme.COLORS.DARK_900};
    
    border-radius: .5rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  .dropdown:hover .dropdown-content {
    display: flex;
  }

  .dropdown-content:hover {
    display: flex;
  }

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }
`

export const NavButton = styled(Link)`
  display: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  text-decoration: none;
  
  min-width: 216px;
  height: 4.8rem;
  padding: 1.2rem 4.6rem;

  border-radius: .5rem;

  transition: background-color 0.3s ease;

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
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
    
    @media ${device.laptop} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;