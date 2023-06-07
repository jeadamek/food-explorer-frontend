import { useState } from "react";
import PropTypes from "prop-types";

import { Container } from "../Stepper/styles";

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

export function Stepper({ value, onChange }){
  const [quantity, setQuantity] = useState(value);

  function handleAddQuantity(){
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
  }

  function handleRemoveQuantity(){
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  }
  
  return (
    <Container value={quantity} >
      <button onClick={handleRemoveQuantity}>
        <FiMinus size={24} />
      </button>
      <span>{quantity}</span>
      <button onClick={handleAddQuantity}>
        <FiPlus size={24} />
      </button>
    </Container>
  )
}

Stepper.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}
