import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  max-width: 40.4rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > h2 {
    font-size: 32px;
    line-height: 140%;
  }

  > div {
    display: flex;
    flex-direction: column;

    height: 41.6rem;

    padding-right: 1rem;

    overflow-y: scroll;
  } 

  .order {
    width: 100%;

    padding: 1.6rem 0;
    
    display: flex;
    align-items: center;
    gap: 1.6rem;

    img {
      height: 7.2rem;
      width: 7.2rem;
    }

    > div {
      width: 100%;
    }
  }

  .order-info {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    > h3 {
      font-size: 20px;
      line-height: 160%;
    }

    > span {
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  .edit-order {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1rem;

    > button {
      border: none;
      background: none;

      color: ${({ theme }) => theme.COLORS.TOMATO_400};

      cursor: pointer;
      
      opacity: 1;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .total {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > button {
    width: 216px;
    align-self: flex-end;
    margin-top: 1.6rem;
  }
`;