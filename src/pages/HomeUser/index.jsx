import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardUser } from "../../components/CardUser";
import { CardAdmin } from "../../components/CardAdmin";

export function HomeUser() {
  return(
    <Container>
      <Header />
      <main>

        <CardUser to="/details"
          img="/public/salada-molla.png"
          title="Salada Molla"
          description="Massa fresca com camarões e pesto."
          price={49.97}
          favorite
        />

        <CardAdmin to="/home"
          img="/public/saladaRavanello.png"
          title="Salada Ravanello"
          description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."
          price={49.97}
        />
      </main>
      <Footer />
    </Container>
  )
}