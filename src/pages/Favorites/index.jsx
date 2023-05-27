import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardUser } from "../../components/CardUser";




export function Favorites() {
  const [favorites, setFavorites] = useState([]);
  function handleSearch() {
    alert("search");
  }
  
  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get(`/favorites`);
      setFavorites(response.data);
      console.log(response.data)
    }

    fetchFavorites();
  }, []);

  return(
    <Container>
      <Header onSearch={handleSearch}/>
      <main>
        <section>
          <h2>Favoritos</h2>
          {
            favorites.map(favorite => (
              <CardUser key={String(favorite.id)} item={favorite} />
            ))
          }
        </section>
      </main>
      <Footer />
    </Container>
  )
}