import { toast } from "react-toastify";
import PropTypes from "prop-types";

import { api } from "../../services/api";

import { Container } from "./styles";

export function CardFavorites({ favorite, onRemoveFavorite, ...rest}) {
  const imageUrl = `${api.defaults.baseURL}/files/${favorite.image}`

  async function handleRemoveFavorite(idFav) {
    await api.delete(`/favorites/${idFav}`)
      .then(() => {
        onRemoveFavorite(idFav);
        toast.success(`${favorite.name} removido com sucesso!`);
      })
      .catch(error => {
        if(error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container to={`/details/${favorite.dish_id}`} {...rest} >
      <img src={imageUrl} alt={`imagem de ${favorite.name}`}/>
      <div className="dish-info">
        <h3>{`${favorite.name}`}</h3>
        <span onClick={(e) => {
          e.preventDefault();
          handleRemoveFavorite(favorite.id);
        }}>
        Remover dos Favoritos</span>
      </div>
    </Container>
  )
}

CardFavorites.propTypes = {
  favorite: PropTypes.object.isRequired,
  onRemoveFavorite: PropTypes.func
}