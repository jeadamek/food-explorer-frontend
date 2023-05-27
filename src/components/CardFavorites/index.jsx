import { toast } from "react-toastify";
import PropTypes from "prop-types";

import { api } from "../../services/api";

import { Container } from "./styles";

export function CardFavorites({ dish, onRemoveFavorite, ...rest}) {
  const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`

  async function handleRemoveFavorite(idFav) {
    await api.delete(`/favorites/${idFav}`)
      .then(() => {
        onRemoveFavorite(idFav);
        toast.success("Favorito removido com sucesso!");
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
    <Container to={`/details/${dish.id}`} {...rest} >
      <img src={imageUrl} alt={`imagem de ${dish.name}`}/>
      <div className="dish-info">
        <h3>{`${dish.name}`}</h3>
        <span onClick={(e) => {
          e.preventDefault();
          handleRemoveFavorite(dish.id);
        }}>
        Remover dos Favoritos</span>
      </div>
    </Container>
  )
}

CardFavorites.propTypes = {
  dish: PropTypes.object.isRequired,
  onRemoveFavorite: PropTypes.func
}