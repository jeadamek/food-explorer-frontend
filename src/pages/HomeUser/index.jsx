import { Banner, Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Carousel } from "../../components/Carousel";
import { dishes } from "./dishes";

export function HomeUser() {

  return(
    <Container>
      <Header />
      <main>
          
          <Banner>
            <div className="banner">
              <img src="/src/assets/banner.png" alt="Banner: foto de macarons de cores variadas, framboesas, mirtilos e folhas como se estivessem flutuando no ar" />

              <div className="banner-info">
                <div className="banner-title">
                  <h1>Sabores inigualáveis</h1>
                  <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
                </div>
              </div>
            </div>
          </Banner>

        
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