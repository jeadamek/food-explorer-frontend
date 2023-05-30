import { useState } from "react";
import { Container } from "../Stepper/styles";

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

export function Stepper(){
  const [quantity, setQuantity] = useState(1);

  function handleAddQuantity(e){
    e.preventDefault();
    setQuantity(prevState => prevState + 1);
  }

  function handleRemoveQuantity(e){
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(prevState => prevState - 1);
    }
  }

  return (
    <Container>
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