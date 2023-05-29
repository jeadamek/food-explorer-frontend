import { Container, ContentMobile, ContentDesktop } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function OrdersHistory() {
  return(
    <Container>
      <Header />

      <main>
        <h1>Histórico de pedidos</h1>
        <ContentMobile>
          <span className="code">000004</span>
          <span className="status">Pendente</span>
          <span className="time">20/05 às 18h00</span>
          <p className="details">
            1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá
          </p>
        </ContentMobile>

        <ContentDesktop>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pendente</td>
              <td>00000004</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <td>Pendente</td>
              <td>00000004</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
            </tr>
          </tbody>
        </ContentDesktop>





      </main>

      <Footer />
    </Container>
  )
}