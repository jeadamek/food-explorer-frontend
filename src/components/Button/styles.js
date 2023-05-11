import styled from 'styled-components';
import { device } from '../../breakpoints/devices';

export const Container = styled.button`
  width: 100%;
  height: 4rem;
  
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

  >img {
    height: 1.5rem;
  }

  @media ${device.tablet} { 
    width: fit-content;
    height: 4.8rem;

    padding: 1.2rem 2.4rem;

    >img {
      height: 2.2rem;
    }
  }

`;