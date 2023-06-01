import { Container } from "./styles";


import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Payment } from "../../components/Payment";

export function Order() {
  return(
    <Container>
      <Header />

      <main>
        <Cart />

        <Payment />
      </main>

      <Footer />
    </Container>
  )
}