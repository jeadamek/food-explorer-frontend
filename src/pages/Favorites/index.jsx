import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardFavorites } from "../../components/CardFavorites";


export function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function handleRemoveFavorite(id) {
    const newFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(newFavorites);
  }
  
  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get(`/favorites`);
      setFavorites(response.data);
    }

    fetchFavorites();
  }, []);

  return(
    <Container>
      <Header />
      <main>
        <h1>Meus favoritos</h1>
        <div className="favorite-items">
          {
            favorites.length > 0 ? ( 
              favorites.map(favorite => (
                <CardFavorites 
                  key={String(favorite.id)} 
                  favorite={favorite} 
                  onRemoveFavorite={handleRemoveFavorite}
                />
              ))
            ) : (
              <p>Você não possui pratos favoritos</p>
            )
          }
        </div>
      </main>
      <Footer />
    </Container>
  )
}