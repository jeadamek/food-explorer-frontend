import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Container } from "./styles";

import { api } from "../../services/api";

import { TbPencil } from "react-icons/tb";

export function CardAdmin({ dish, ...rest }) {
  const priceInCurrency = dish.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const imageUrl = `${api.defaults.baseURL}/files/${dish.image}`
  
  const navigate = useNavigate();

  function handleEdit(event) {
    event.preventDefault();
    navigate(`/edit/${dish.id}`);
  }

  return(
    <Container {...rest}>
      <TbPencil size={28} onClick={handleEdit}/>
      <img src={imageUrl} alt={`imagem de ${dish.name}`}/>
      <h3>{`${dish.name}`}</h3>
      <p>{dish.description}</p>
      <span>{priceInCurrency}</span>  
    </Container>
  )
}

CardAdmin.propTypes = {
  dish: PropTypes.object.isRequired,
}