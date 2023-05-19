import styled from "styled-components";

export const Container = styled.span`
  height: 3.2rem;
  min-width: fit-content;

  display: flex;
  align-items: center;

  padding: .4rem .8rem;

  border-radius: .5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`