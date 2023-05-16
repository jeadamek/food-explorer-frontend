import styled from 'styled-components';
import { device } from '../../breakpoints/devices';

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  line-height: 1.6;
  border-radius: .5rem;
  padding: 0 1.6rem;
  border: none;
  font-weight: 500;

  cursor: pointer;

  display: flex;
  gap: 1.1rem;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} { 
    width: fit-content;

    padding: 1.2rem 2.4rem;
  }

`;