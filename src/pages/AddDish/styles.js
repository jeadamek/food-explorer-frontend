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


export const Content = styled.form`
  
`;