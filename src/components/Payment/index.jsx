import { useState } from "react";
import InputMask from 'react-input-mask';

import { Container, Content } from "./style";

import { Label } from "../Label";
import { Button } from "../Button";

import qrCode from "../../assets/qrCode.svg";
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
          <SiPix size={22} />
          PIX
        </button>  

        <button
          className={paymentMethod == 'credit' ? "active" : undefined}
          onClick={handlePaymentMethod}
        >
          <HiCreditCard size={26} />
          Crédito
        </button>  
      </div>

        <div className="status">
          {
            status == 'payment' && paymentMethod == 'pix' && (
              <img src={qrCode} alt="QR Code" />
            )  
          }

          {
          // CREDIT 
            status == 'payment' && paymentMethod == 'credit' &&         
              <form>
                <div className="input-wrapper">
                  <Label title="Número do Cartão" htmlFor="card-number"/>
                  <InputMask
                    id="card-number"
                    name="card-number"
                    type="text"
                    mask="9999 9999 9999 9999"
                    placeholder="0000 0000 0000 0000"
                    required
                  />
                </div>
                <div className="card-confirmation-wrapper">
                  <div className="input-wrapper">
                    <Label title="Validade" htmlFor="expiration-date" />
                    <InputMask
                      id="expiration-date"
                      name="expiration-date"
                      type="text"
                      mask="99/99"
                      placeholder="04/05"
                      required
                    />
                  </div>
                  <div className="input-wrapper" >
                    <Label title="CVC" htmlFor="cvc" />
                    <InputMask
                      id="cvc"
                      name="cvc"
                      type="text"
                      mask="999"
                      placeholder="000"
                      required
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