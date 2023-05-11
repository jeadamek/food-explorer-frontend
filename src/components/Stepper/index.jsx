import { Container } from "../Stepper/styles";
import iconPlus from "../../assets/icons/plus.svg";
import iconMinus from "../../assets/icons/minus.svg";


export function Stepper(){
  return (
    <Container>
      <button><img src={iconPlus} alt="Adicionar prato" /></button>
      <span>01</span>
      <button><img src={iconMinus} alt="Remover prato" /></button>
    </Container>
  )
}