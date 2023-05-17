import styled from "styled-components";

export const Container = styled.div`

  width: 32px;
  height: 32px;
  border: 4px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border-top: 4px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  animation: spiner 1s ease-in infinite;

  @keyframes spiner {
    0% {
      transform: rotate(0deg);
    }

    100%{
      transform: rotate(360deg);
    }
  }
`;

