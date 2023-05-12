import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;

  margin-top: 1.2rem;
  margin-bottom: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
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
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      padding: 14px 13px;
    }
  }

  > svg { 
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    position: absolute;
    left: 14px;
  }
`;