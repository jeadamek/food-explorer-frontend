import { Container } from "./styles";

import { Header } from "../../components/Header";

function handleSearch() {
  alert("search");
}

export function Favorites() {
  return(
    <Container>
      <Header onSearch={handleSearch}/>
      <main>
      <section>
          <h2>Favoritos</h2>
          {/* CARDS WILL BE HERE */}
        </section>
      </main>
    </Container>
  )
}