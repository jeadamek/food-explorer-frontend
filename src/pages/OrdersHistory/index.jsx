import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function OrdersHistory() {
  return(
    <Container>
      <Header />

      <main>
        <h1>Pedidos</h1>
      </main>

      <Footer />
    </Container>
  )
}