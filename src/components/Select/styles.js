import styled from "styled-components";

export const Container = styled.select`
  width: 100%;
  height: 4.8rem;

  margin-top: .8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border: solid 0.5px ${({ theme }) => theme.COLORS.DARK_900};

  display: flex;
  align-items: center;

  border: none;
  border-radius: .5rem;

  padding: 0 1.6rem;

  appearance: none;
  -webkit-appearance: none;

  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");

  background-repeat: no-repeat;
  background-position: right 8px top 50%;

  &:focus {
    border: solid 0.5px ${({ theme }) => theme.COLORS.CAKE_200_TRANSPARENCY}; 
  }
`;

export const Option = styled.option`
  color: ${({ theme }) => theme.COLORS.DARK_900};
  background-color: ${({ theme }) => theme.COLORS.CAKE_200};

  &:disabled {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    background-color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;