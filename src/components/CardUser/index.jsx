import { Container } from "./styles";

import PropTypes from "prop-types";

import { Button } from "../Button";
import { Stepper } from "../Stepper";

import { IoMdHeartEmpty } from 'react-icons/io'
import { IoMdHeart } from 'react-icons/io'

export function CardUser({ img, title, description, price, favorite }) {
  const priceInCurrency = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return(
    <Container>
      <button>{favorite ? <IoMdHeart size={24} /> : <IoMdHeartEmpty size={24} />}</button>
      <img src={img} alt={`imagem de ${title}`}/>
      <h3>{`${title} >`}</h3>
      <p>{description}</p>
      <span>{priceInCurrency}</span>  
      <div className="add-cart">
        <Stepper />
        <Button title="incluir" className="primary" />
      </div>
    </Container>
  )
}

CardUser.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  favorite: PropTypes.bool.isRequired
}