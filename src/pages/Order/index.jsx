import { Container } from "./styles";


import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Order() {
  return(
    <Container>
      <Header />

      <main>
        <Cart />

      </main>

      <Footer />
    </Container>
  )
}