import styled from "styled-components";
import { device } from "../../breakpoints/devices";

export const Container = styled.div`
  position: relative;
  cursor: grab;
  overflow: hidden;


  .wrapper-items {
    display: flex;
    gap: 1.6rem
  }
`;

const Button = styled.button`
  display: none;
  position: absolute;
  top: 50%;

  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.CAKE_200};

  cursor: pointer;

  @media ${device.laptop} {
    display: block;
  }
`;

export const PrevButton = styled(Button)`
  left: 8px;
`;

export const NextButton = styled(Button)`
  right: 8px;
`;

