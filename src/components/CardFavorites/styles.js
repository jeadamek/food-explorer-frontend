import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  transition: opacity 0.3s ease;

  img {
    width: 75px;
  }

  &:hover{
    opacity: 0.9;
  }

  &:hover + .dish-info> span{
    opacity: 1;
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