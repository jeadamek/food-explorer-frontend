import { Container, Content } from "./style";

import { Label } from "../Label";

import { SiPix } from "react-icons/si";
import { HiCreditCard } from "react-icons/hi";
import { Input } from "../Input";
import { Button } from "../Button";

export function Payment() {
  
  return(
    <Container>
      <h2>Pagamento</h2>
      
      <Content>
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

        <div className="status">
          {/* PIX */}

          {/* CREDIT */}
          <form>
            <div className="input-wrapper">
              <Label title="Número do Cartão" />
              <Input
                placeholder="0000 0000 0000 0000"
              />
            </div>

            <div className="card-confirmation-wrapper">
              <div className="input-wrapper">
                <Label title="Validade" />
                <Input
                  placeholder="04/05"
                />
              </div>

              <div className="input-wrapper">
                <Label title="CVC" />
                <Input
                  placeholder="XXX"
                />
              </div>
            </div>

            <Button title="Finalizar pagamento" className="primary" />
          </form>

          {/* PROCESSING */}

          {/* PAYMENT APROVED */}

          {/* PREPARING */}


        </div>
      </Content>
    </Container>
  )
}