import PropTypes from "prop-types";

import { api } from "../../services/api";

import { Container } from "./styles";

export function CardFavorites({ dish, ...rest}) {
  const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`

  return (
    <Container to={`/details/${dish.id}`} {...rest} >
      <img src={imageUrl} alt={`imagem de ${dish.name}`}/>
      <div className="dish-info">
        <h3>{`${dish.name}`}</h3>
        <span>Remover dos Favoritos</span>
      </div>
    </Container>
  )
}

CardFavorites.propTypes = {
  dish: PropTypes.object.isRequired
}