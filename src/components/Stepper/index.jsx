import { Container } from "../Stepper/styles";

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

export function Stepper(){
  return (
    <Container>
      <button><FiMinus size={24} /></button>
      <span>01</span>
      <button><FiPlus size={24} /></button>
    </Container>
  )
}