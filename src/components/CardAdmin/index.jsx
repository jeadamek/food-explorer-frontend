import { Container } from "./styles";

import PropTypes from "prop-types";

import { TbPencil } from "react-icons/tb";

export function CardAdmin({ dish }) {
  const priceInCurrency = dish.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return(
    <Container>
      <TbPencil size={28} />
      <img src={dish.img} alt={`imagem de ${dish.title}`}/>
      <h3>{`${dish.title} >`}</h3>
      <p>{dish.description}</p>
      <span>{priceInCurrency}</span>  
    </Container>
  )
}

CardAdmin.propTypes = {
  dish: PropTypes.object.isRequired,
}