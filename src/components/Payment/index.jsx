import { Container } from "./style";

import { SiPix } from "react-icons/si";
import { HiCreditCard } from "react-icons/hi";

export function Payment() {
  
  return(
    <Container>
      <h2>Pagamento</h2>
      <div className="buttons">
        <button>
          <SiPix size={24} />
          PIX
        </button>  

        <button
          className="active"
        >
          <HiCreditCard size={24} />
          Crédito
        </button>  
      </div>    
    </Container>
  )
}