import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import { ExplorerLogo } from "../../assets/ExplorerLogo";


export function Profile() {
  return(
    <Container>
      <Header />
        <main>
          <ExplorerLogo height={200}/>

        </main>
      <Footer />
    </Container>
  )
}