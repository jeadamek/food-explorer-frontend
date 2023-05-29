import styled from "styled-components";
import { device } from "../../breakpoints/devices";

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
    width: 100%;

    padding: 4rem 2.8rem;
    margin: 0 auto;

    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    > h1 {
      margin-bottom: 2.8rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
      }
  }

  @media ${device.laptop} {
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      padding: 3.4rem 8rem 15rem;

      > h1 {
        margin-bottom: 3.8rem;
        font-size: 3.2rem;
      }
    }
  }

  @media ${device.laptopL} {
    > main {
      padding: 3.4rem 12.3rem 15rem;  
    }
  }
`;

export const ContentMobile = styled.div`
  width: 100%;
  
  background-color: transparent;
  border: solid 2px ${({ theme }) => theme.COLORS.DARK_1000};

  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-areas: 
    "code status time"
    "details details details";

  align-items: center;
  gap: 1.6rem;

  padding: 1.6rem 2rem;

  border-radius: .8rem;

  .code {
    grid-area: code;
  }

  .status {
    grid-area: status;
    justify-self: center;

    display: flex;
    align-items: center;
    gap: .8rem;
  }

  .status::before {
    content: "";

    width: 8px;
    height: 8px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_300};

    border-radius: 50%;
  }

  .time {
    grid-area: time;
    justify-self: end;
  }

  .details {
    grid-area: details;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const ContentDesktop = styled.table`
  display: none;

  width: 100%;
  border: solid 2px ${({ theme }) => theme.COLORS.DARK_1000};

  border-collapse: collapse;
  border-radius: .8rem;

  thead, tbody tr {
    display: table;
    table-layout: fixed;
    width: 100%;
  }


  th, td {
    border-bottom: solid 2px ${({ theme }) => theme.COLORS.DARK_1000};
    border-right: solid 2px ${({ theme }) => theme.COLORS.DARK_1000};
  }

  thead th {
    padding: 2.1rem 2.4rem;
    text-align: left;
  }

  tbody td {
    padding: 1.6rem 2.4rem;
  }

  thead th:nth-child(1),
  tbody td:nth-child(1) {
    width: 15rem;
  }

  thead th:nth-child(2),
  tbody td:nth-child(2) {
    width: 15rem;
  }

  thead th:last-child,
  tbody td:last-child {
    width: 15rem;
    border-right: none;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  @media ${device.tablet} {
    display: block;
  }
`;
