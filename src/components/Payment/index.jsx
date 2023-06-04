import { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { toast } from "react-toastify";

import { api } from "../../services/api";

import { Container, Content } from "./styles";

import { Label } from "../Label";
import { Button } from "../Button";
import { Loading } from "../Loading";

import qrCode from "../../assets/qrCode.svg";
import { ForkKnife } from "../../assets/icons/ForkKnife";

import { SiPix } from "react-icons/si";
import { FiClock } from "react-icons/fi";
import { HiCreditCard } from "react-icons/hi";
import { BsBagCheckFill } from "react-icons/bs";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

// order test
import { order } from "./order";

export function Payment() {
  const [cvcCode, setCvcCode] = useState(null);
  const [creditCard, setCreditCard] = useState(null);
  const [cardExpirationDate, setCardExpirationDate] = useState(null);

  const [paymentMethod, setPaymentMethod] = useState('pix');


  const [isPaid, setIsPaid] = useState();
  const [status, setStatus] = useState("");

  const cart = [];

  

  async function handlePurchase() {
    if (!creditCard || !cardExpirationDate || !cvcCode) {
      toast.warn("Preencha todos os dados do cartão");
      return;
    }

    setStatus("processing");

    await api.post("/orders", order)
      .then(() => {
        toast.success("Pedido realizado com sucesso!");

        setTimeout(() => {
          setIsPaid(true)
        }, 1000)
      })
      .catch((error) => {
        if (error.response) {
          return toast.error(error.response.data.message);
        } else {
          return toast.error("Erro ao criar o prato!");
        }
      })
  }

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

  useEffect(() => {
    if (cart.length !== 0) {
      setStatus("payment");
    } else {
      fetchUserOrders();
    }

    async function fetchUserOrders() {
      const response = await api.get("orders/");
      const lastOrder = response.data[0];

        const orderUpdatedStatus = (() => {
          switch (lastOrder.order_status) {
          case "pendente": 
            return "processing"
          case "preparando":
            return "preparing"
          case "pronto" :
            return "isReady"
          case "entregue":
            return "delivered"  
        }
        })();

        setStatus(orderUpdatedStatus);
        setIsPaid(true);
    }

  },[])

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
                    onChange={e => setCreditCard(e.target.value)}
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
                      onChange={e => setCardExpirationDate(e.target.value)}
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
                      onChange={e => setCvcCode(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button 
                  title="Finalizar pagamento" 
                  className="primary"
                  onClick={handlePurchase}
                />

              </form>
          }

          {
          // PROCESSING
            status == 'processing' && !isPaid &&
            <div className="order-status-wrapper">
              <Loading className="loading" />
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
              <ForkKnife 
                color="#7C7C8A"
                size={104} 
              />
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