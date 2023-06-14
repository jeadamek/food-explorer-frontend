import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { CardFavorites } from "../../components/CardFavorites";


export function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function handleRemoveFavorite(id) {
    const newFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(newFavorites);
  }
  
  useEffect(() => {
    async function fetchFavorites() {
      setIsLoading(true);

      const response = await api.get(`/favorites`);
      setFavorites(response.data);

      setIsLoading(false);
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
              isLoading ? (
                <div className="loading-wrapper"> 
                  <Loading className="loading" />
                </div> 
              ) : (
              <p>Você não possui pratos favoritos</p>
            ))
          }
        </div>
      </main>
      <Footer />
    </Container>
  )
}