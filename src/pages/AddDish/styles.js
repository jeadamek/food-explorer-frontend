import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    grid-area: content;
    padding: 1.6rem 1rem 5.6rem;

    width: 36.4rem;
    margin: 0 auto;

    header > h1 {
      margin-top: 2.2rem;
      margin-bottom: 3.6rem;
    }
  }
`;

export const Form = styled.form`
  > button {
    margin-top: 2.4rem
  }

  .ingredients{
    > span {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      line-height: 100%;
      font-weight: 400;
      outline: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-bottom: 1.6rem;
    }

    > div {
      width: 100%;
      
      margin-top: 1.2rem;
      margin-bottom: 2.4rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_900};

      border-radius: .5rem;

      padding: .8rem;

      display: flex;
      column-gap: 1.6rem;
      row-gap: .8rem;
      flex-wrap: wrap;
    }
  }
`;