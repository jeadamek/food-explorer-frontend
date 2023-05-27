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
    width: 23rem;
    
    h3 {
      font-weight: 500;
      font-size: 20px;
      line-height: 160%;

      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap
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