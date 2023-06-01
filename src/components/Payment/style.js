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

  .buttons {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    
    display: flex;
    justify-content: space-between;

    border-radius: .8rem .8rem 0 0;


    > button:first-child {
      border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    }

    > button {
      width: 26.5rem;
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

  @media ${device.laptop} {
    width: 53rem;

    margin: 0;
  }
`;