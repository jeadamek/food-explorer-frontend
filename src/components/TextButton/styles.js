import styled from "styled-components";
import { device } from "../../breakpoints/devices";

export const Container = styled.button`
  border: none;
  background: none;

  height: 3.4rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;

  font-size: 2.4rem;
  line-height: 140%;

  cursor: pointer;

  > img {
    height: 2.2rem;
  }

  :hover {
    opacity: 0.5;
  }

  @media ${device.laptop} {
    font-weight: 700;
  }
`;