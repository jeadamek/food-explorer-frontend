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

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > h1 {
      margin-bottom: 2.8rem;
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
  }

  @media ${device.tablet} {
    .content-wrapper .mobile-no-order-found {
      display: none;
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

export const OrdersHeader = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-bottom: 2.8rem;

  .input-wrapper {
    width: 100%;

    > div {
      border-radius: 2.4rem;
      height: 4rem;
    }

    #search {
      width: 100%;
      height: 4rem;

      padding-right: 1.6rem;

      border-radius: 2.4rem;
    }

  }
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .input-wrapper {
      width: 50rem;
    }
  }
`;

export const ContentMobile = styled.div`
  width: 100%;
  
  background-color: transparent;
  border: solid 2px ${({ theme }) => theme.COLORS.DARK_1000};

  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-areas: ${({ isAdmin }) => {
    if (isAdmin) {
      return `'code time time'
    'details details details'
    'status status status'`;
    } else {
      return `'code status time'
    'details details details'`;
    }
    
  }};


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
  }

  .time {
    grid-area: time;
    justify-self: ${({ isAdmin }) => isAdmin ? "start" : "end"};
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
    width: ${({ isAdmin }) => isAdmin ? "22.5rem" : "15rem"};
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

  .desktop-no-order-found {
    text-align: center;
    padding: 5rem;
    font-size: 2rem;
  }

  @media ${device.tablet} {
    display: block;
  }
`;
