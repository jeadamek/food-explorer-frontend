import { Container } from './styles';
import logo from "../../assets/logo_gray.svg";

export function Footer(){
  return (
    <Container>
      <img src={logo} alt="Logo Food Explorer" />
      <span>&copy; 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}