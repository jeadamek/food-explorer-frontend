import { Container } from "./styles";

import PropTypes from "prop-types";

import { api } from "../../services/api";

import { Button } from "../Button";
import { Stepper } from "../Stepper";

import { IoMdHeartEmpty } from 'react-icons/io'
import { IoMdHeart } from 'react-icons/io'
import { useState } from "react";
import { useEffect } from "react";

export function CardUser({ dish, ...rest }) {
  const [isFavorite, setIsFavorite] = useState();
  const [idFavorite, setIdFavorite] = useState();
  const priceInCurrency = dish.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`
  
  async function handleFavorite(event) {
    event.preventDefault();
    if (isFavorite) {
      await api.delete(`/favorites/${idFavorite}`);
      setIsFavorite(false);
    } else {
      const id = await api.post("/favorites/", { dish_id: dish.id });
      setIsFavorite(true);
      setIdFavorite(id);
    }
  }

  useEffect(() => {
    async function fetchFavorite() {
      const response = await api.get('/favorites');
      
      const favorite = response.data.find(
        favorite => favorite.dish_id === dish.id
      )
      
      setIsFavorite(favorite ? true : false);
      setIdFavorite(favorite ? favorite.id : null);
    }

    fetchFavorite();
  }, [dish.id]);

  return(
    <Container {...rest}>
      <button onClick={handleFavorite}>
        {isFavorite ? <IoMdHeart size={28} /> : <IoMdHeartEmpty size={28} />}
      </button>
      <img src={imageUrl} alt={`imagem de ${dish.name}`}/>
      <h3>{`${dish.name}`}</h3>
      <p>{dish.description}</p>
      <span>{priceInCurrency}</span>  
      <div className="add-cart">
        <Stepper />
        <Button title="incluir" className="primary" />
      </div>
    </Container>
  )
}

CardUser.propTypes = {
  dish: PropTypes.object.isRequired,
}