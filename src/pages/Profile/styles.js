import styled from "styled-components";
import { device } from "../../breakpoints/devices";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    grid-area: content;
    width: 100%;
    max-width: 50rem;

    padding: 5rem 3.5rem 12rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${device.laptop} {
    grid-template-rows: 9.6rem auto 7.7rem;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  margin-top: 3.2rem;

  > h1 {
    text-align: center;
    margin-bottom: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  } 

  > p {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > button {
      width: 100%;
      margin-top: 3.2rem;
    }
  }
`;