import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  min-height: 17.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  
  border: none;
  resize: none;
  
  padding: 16px; 
  border-radius: .5rem;

  margin-top: 1.2rem;

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;