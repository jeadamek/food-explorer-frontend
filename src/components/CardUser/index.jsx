import { Container } from "./styles";

import PropTypes from "prop-types";

import { Button } from "../Button";
import { Stepper } from "../Stepper";

import { IoMdHeartEmpty } from 'react-icons/io'
import { IoMdHeart } from 'react-icons/io'

export function CardUser({ dish, ...rest }) {
  const priceInCurrency = dish.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return(
    <Container {...rest}>
      <button>{dish.favorite ? <IoMdHeart size={28} /> : <IoMdHeartEmpty size={28} />}</button>
      <img src={dish.img} alt={`imagem de ${dish.title}`}/>
      <h3>{`${dish.title} >`}</h3>
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