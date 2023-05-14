import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Carousel } from "../../components/Carousel";
import { dishes } from "./dishes";

export function HomeUser() {

  return(
    <Container>
      <Header />
      <main>
        <h1>BANNER</h1>
        
        <section>
          <h2>Refeições</h2>
          <Carousel items={dishes} />
        </section>
        
        <section>
          <h2>Sobremesas</h2>
          <Carousel items={dishes} />
        </section>

        <section>
          <h2>Bebidas</h2>
          <Carousel items={dishes} />
        </section>

      </main>
      <Footer />
    </Container>
  )
}