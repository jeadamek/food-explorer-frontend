import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;

  margin-top: .8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border: solid 0.5px ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  display: flex;
  align-items: center;

  border-radius: .5rem;
`;

export const Input = styled(CurrencyInput)`
  background: transparent;
  border: 0;
  
  width: 100%;
  height: 4.8rem;

  padding: 14px;

  border-radius: .5rem;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &:focus {
    border: solid 0.5px ${({ theme }) => theme.COLORS.CAKE_200_TRANSPARENCY}; 
  }
`;