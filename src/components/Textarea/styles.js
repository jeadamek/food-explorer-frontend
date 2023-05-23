import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  min-height: 17.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border: solid 0.5px ${({ theme }) => theme.COLORS.DARK_900};
  
  border: none;
  resize: none;
  
  padding: 1.6rem; 
  border-radius: .5rem;

  margin-top: .8rem;

  &:focus {
    border: solid 0.5px ${({ theme }) => theme.COLORS.CAKE_200_TRANSPARENCY}; 
  }
`;