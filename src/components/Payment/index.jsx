import { useEffect, useState } from "react";
import { PatternFormat } from "react-number-format";
import { toast } from "react-toastify";

import { api } from "../../services/api";

import { useCart } from "../../hooks/cart";

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


export function Payment() {
  const { cartItems, cleanCart, orderTotal } = useCart();

  const [cvcCode, setCvcCode] = useState(null);
  const [creditCard, setCreditCard] = useState(null);
  const [cardExpirationDate, setCardExpirationDate] = useState(null);

  const [cvcCodeClass, setCvcCodeClass] = useState("");
  const [creditCardClass, setCreditCardClass] = useState("");
  const [cardExpirationDateClass, setCardExpirationDateClass] = useState("");


  const [paymentMethod, setPaymentMethod] = useState('pix');

  const [isPaid, setIsPaid] = useState();
  const [status, setStatus] = useState("");


  function handlePaymentMethod() {
    if (status !== 'payment'){
      return;
    }

    if (paymentMethod == 'pix'){
      setPaymentMethod('credit card');
    } else {
      setPaymentMethod('pix');
    }
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      handlePurchase();
    }
  }

  async function handlePurchase() {
    if (!creditCard || !cardExpirationDate || !cvcCode) {
      !cvcCode && setCvcCodeClass("invalid");
      !creditCard && setCreditCardClass("invalid");
      !cardExpirationDate && setCardExpirationDateClass("invalid");
      
      toast.error("Preencha todos os dados do cartão");
      return;
    }

    const cvcCodeWithoutMask = cvcCode.replace(/[_\s]/g, '');
    const cardNumberWithoutMask = creditCard.replace(/[_\s]/g, '');
    const cardExpirationDateWithoutMask = cardExpirationDate.replace(/[/_\s]/g, '');
    
    if (cardNumberWithoutMask.length !== 16){
      setCreditCardClass("invalid");
      return toast.error("Cartão Inválido");
    } else {
      setCreditCardClass("valid");
    }

    if (cardExpirationDateWithoutMask.length !== 4){
      setCardExpirationDateClass("invalid");
      return toast.error("Validade Inválida");
    } else {
      setCardExpirationDateClass("valid");
    }

    if (cvcCodeWithoutMask.length !== 3){
      setCvcCodeClass("invalid");
      return toast.error("CVC Inválido");
    } else {
      setCvcCodeClass("valid");
    }

    setStatus("processing");

    const order = {
      "cart": cartItems.map(item => {
        return {
          dish_id: item.id,
          quantity: item.quantity,
          unit_price: item.price
        }
      }),
      order_amount: orderTotal,
      payment_method: paymentMethod
    }

    await api.post("/orders", order)
      .then(() => {
        cleanCart();
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

  useEffect(() => {
    if (cartItems.length !== 0) {
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
  },[cartItems])

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
          className={paymentMethod == 'credit card' ? "active" : undefined}
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
            status == 'payment' && paymentMethod == 'credit card' &&         
              <form>
                <div className="input-wrapper">
                  <Label title="Número do Cartão" htmlFor="card-number"/>
                  <PatternFormat 
                    id="card-number"
                    name="card-number"
                    type="text"
                    format="#### #### #### ####"
                    mask="_"
                    placeholder="0000 0000 0000 0000"
                    className={creditCardClass}
                    required
                    onChange={(e) => {
                      setCreditCard(e.target.value);
                      setCreditCardClass("");
                    }}
                  />
                </div>
                <div className="card-confirmation-wrapper">
                  <div className="input-wrapper">
                    <Label title="Validade" htmlFor="expiration-date" />
                    <PatternFormat
                      id="expiration-date"
                      name="expiration-date"
                      type="text"
                      format="##/##"
                      mask="_"
                      placeholder="04/05"
                      className={cardExpirationDateClass}
                      onChange={(e) => {
                        setCardExpirationDate(e.target.value);
                        setCardExpirationDateClass("");
                      }}
                      required
                    />
                  </div>
                  <div className="input-wrapper" >
                    <Label title="CVC" htmlFor="cvc" />
                    <PatternFormat
                      id="cvc"
                      name="cvc"
                      type="text"
                      format="###"
                      mask="_"
                      placeholder="000"
                      className={cvcCodeClass}
                      onChange={(e) => {
                        setCvcCode(e.target.value);
                        setCvcCodeClass("");
                      }}
                      onKeyDown={handleKeyDown}
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