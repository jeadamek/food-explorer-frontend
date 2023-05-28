import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  transition: filter 0.3s ease;

  img {
    width: 75px;
  }

  &:hover{
    filter: brightness(1.3);
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
        filter: brightness(1.2);
        text-decoration: underline;
      }
    }
  }
`;