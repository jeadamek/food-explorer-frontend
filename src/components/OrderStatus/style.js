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