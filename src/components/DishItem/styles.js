import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew}) => isNew ? "transparent": theme.COLORS.DARK_700};

  border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}`: "none"};

  border-radius: .8rem;

  padding: 0 1.6rem;

  > button {
    border: none;
    background: none;
    
    display: flex;
    align-items: center;

    color: ${({ theme, isNew}) => isNew ? theme.COLORS.CAKE_200 : theme.COLORS.TOMATO_300};
    font-size: 1.6rem;

    cursor: pointer;
  }

  > input {
    height: 3.2rem;
    /* max-width: fit-content; */

    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;