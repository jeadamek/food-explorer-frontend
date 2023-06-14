import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;

  margin-top: .8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border: solid 1px ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  display: flex;
  align-items: center;

  border-radius: .5rem;
  
  position: relative;

  .hasIcon {
    padding: 1.4px 50px;

    &:focus {
      padding: 14px 49px;
    }
  }

  > input {
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
      border: solid 1px ${({ theme }) => theme.COLORS.CAKE_100}; 
    }

    &.valid {
      border: 1px solid ${({ theme }) => theme.COLORS.MINT_100};
    }

    &.invalid {
      border: 1px solid ${({ theme }) => theme.COLORS.TOMATO_300};
    }

    &[type=number]::-webkit-inner-spin-button { 
      -webkit-appearance: none;
    }

    &[type=number] { 
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }

  > svg { 
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    position: absolute;
    left: 14px;
  }

  > button {
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.CAKE_200};

    position: absolute;
    right: 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
`;