import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardFavorites } from "../../components/CardFavorites";


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
          <h2>Meus favoritos</h2>
          <div className="favorite-items">
            {
              favorites.map(favorite => (
                <CardFavorites key={String(favorite.id)} dish={favorite} />
              ))
            }
          </div>
        </section>
      </main>
      <Footer />
    </Container>
  )
}