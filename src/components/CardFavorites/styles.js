import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  img {
    width: 75px;
  }

  &:hover{
    opacity: 0.9;
  }

  .dish-info {
    h3 {
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;
    }

    span {
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }

`;