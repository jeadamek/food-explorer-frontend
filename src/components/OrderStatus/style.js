import styled from "styled-components";


export const UserContent = styled.span`
  display: flex;
  align-items: center;
  gap: .8rem;
  
  &::before {
    content: "";

    width: 8px;
    height: 8px;
    
    background-color: ${({ theme, status }) => { 
          switch (status) {
            case 'pendente':
              return theme.COLORS.TOMATO_300
            case 'preparando':
              return theme.COLORS.CARROT_100
            case 'pronto':
              return theme.COLORS.MINT_100
            case 'entregue':
              return theme.COLORS.CAKE_200
            default:
              return 'transparent'
          }
    }};

    border-radius: 50%;
  }
`;

export const Select = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");

  background-repeat: no-repeat;
  background-position: right 8px top 6px;

  cursor: pointer;

  .selected {
    display: flex;
    align-items: center;
    gap: .8rem; 

    padding: 1.4rem 1.6rem;

    border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_100};
  }
  .option {
    display: flex;
    align-items: center;
    gap: .8rem;
    
    padding: 1.4rem 1.6rem;


    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_600};
    }
  }

  .label {
    display: flex;
    align-items: center;
  }

  .dot {
    content: "";

    width: 8px;
    height: 8px;
    
    border-radius: 50%;
  }
`;