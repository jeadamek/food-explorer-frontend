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

  :hover {
    opacity: 0.5;
  }

  @media ${device.laptop} {
    span {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 140%;
    }
  }
`;