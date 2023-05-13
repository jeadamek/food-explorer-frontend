import { Container } from "./styles";

import PropTypes from "prop-types";

import { TbPencil } from "react-icons/tb";

export function CardAdmin({ img, title, description, price}) {
  const priceInCurrency = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return(
    <Container>
      <TbPencil size={26} />
      <img src={img} alt={`imagem de ${title}`}/>
      <h3>{`${title} >`}</h3>
      <p>{description}</p>
      <span>{priceInCurrency}</span>  
    </Container>
  )
}

CardAdmin.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}