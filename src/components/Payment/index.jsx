import { Container, Content } from "./style";

import { Label } from "../Label";
import { Input } from "../Input";
import { Button } from "../Button";

import { SiPix } from "react-icons/si";
import { HiCreditCard } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


export function Payment() {

  const status = 'processing';
  const paymentMethod = 'card'
  const isPaid = false 

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


          {
          // CREDIT 
            status == 'initial' && paymentMethod == 'card' &&         
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
          }


          {
          // PROCESSING
            status == 'processing' && ! isPaid &&
            <div className="order-status-wrapper">
              <FiClock size={104} />
              <span>Processando pagamento</span>
            </div>
          }

          {
          // PAYMENT APROVED
            status == 'processing' && isPaid && 
            <div className="order-status-wrapper">
              <IoCheckmarkCircleOutline size={110} />
              <span>Pagamento Aprovado</span>
            </div>
          }

          {
          // PREPARING
            status == 'preparing' &&
            <div className="order-status-wrapper">
              <FiClock size={104} />
              <span>Preparando seu pedido</span>
            </div>
          }
          


        </div>
      </Content>
    </Container>
  )
}