import { Container } from "./styles";

import PropTypes from "prop-types";

import { api } from "../../services/api";

import { Button } from "../Button";
import { Stepper } from "../Stepper";

import { IoMdHeartEmpty } from 'react-icons/io'
import { IoMdHeart } from 'react-icons/io'
// import { useEffect, useState } from "react";

export function CardUser({ dish, ...rest }) {
  // const [favorites, setFavorites] = useState();

  const priceInCurrency = dish.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`
  
  // async function handleFavorite() {
  //   const dish_id = dish.id;

  //   await api.post("/favorites/", { dish_id });
  // }

  // useEffect(() => {

  // }, []);

  return(
    <Container {...rest}>
      <button>{dish.favorite ? <IoMdHeart size={28} /> : <IoMdHeartEmpty size={28} />}</button>
      <img src={imageUrl} alt={`imagem de ${dish.name}`}/>
      <h3>{`${dish.name} >`}</h3>
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
  dish: PropTypes.object.isRequired
}