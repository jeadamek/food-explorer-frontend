import styled from "styled-components";
import { device } from "../../breakpoints/devices";

export const Container = styled.button`
  border: none;
  background: none;

  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: .5rem;

  font-size: 2rem;
  line-height: 140%;

  cursor: pointer;

  > img {
    height: 2 rem;
  }

  :hover {
    opacity: 0.5;
  }

  @media ${device.laptop} {
    font-weight: 700;
  }
`;