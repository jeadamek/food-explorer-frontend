import { useState } from "react";

import { Container, Content } from "./style";

import { Label } from "../Label";
import { Input } from "../Input";
import { Button } from "../Button";

import { ForkKnife } from "../../assets/icons/ForkKnife";

import { SiPix } from "react-icons/si";
import { FiClock } from "react-icons/fi";
import { HiCreditCard } from "react-icons/hi";
import { BsBagCheckFill } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


export function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('pix');
  
  
  const status = 'payment';
  const isPaid = false 

  function handlePaymentMethod() {
    if (status !== 'payment'){
      return;
    }

    if (paymentMethod == 'pix'){
      setPaymentMethod('credit');
    } else {
      setPaymentMethod('pix');
    }
  }

  return(
    <Container>
      <h2>Pagamento</h2>
      
      <Content>
      <div className="buttons">
        <button
          className={paymentMethod == 'pix' ? "active" : undefined}
          onClick={handlePaymentMethod}
        >
          <SiPix size={24} />
          PIX
        </button>  

        <button
          className={paymentMethod == 'credit' ? "active" : undefined}
          onClick={handlePaymentMethod}
        >
          <HiCreditCard size={24} />
          Crédito
        </button>  
      </div>

        <div className="status">
          {/* PIX */}


          {
          // CREDIT 
            status == 'payment' && paymentMethod == 'credit' &&         
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

          {
          // DISH IS READY
            status == 'isReady' &&
            <div className="order-status-wrapper">
              <ForkKnife size={104} />
              <span>Pode retirar seu pedido!</span>
            </div>
          }

          {
          // DELIVERED
            status == 'delivered' &&
            <div className="order-status-wrapper">
              <BsBagCheckFill size={104} />
              <span>Pedido entregue!</span>
            </div>
          }
          


        </div>
      </Content>
    </Container>
  )
}