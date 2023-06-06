import PropTypes from 'prop-types';

import { useCart } from "../../hooks/cart";

import { Container } from "./styles";

import { Button } from "../Button";
import { Stepper } from "../Stepper";

export function Cart({onAdvance}) {
  const { cartItems } = useCart();

  const orderTotal = 103.98;

  function handleButtonAdvance() {
    onAdvance();
  }

  function handlePrice(value) {
    const currency = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return currency;
  }

  return(
    <Container>
      <h2>Pedido</h2>
      <div>
        
       { 
        cartItems && 
        cartItems.map(item => (
          <div 
            className="dish-wrapper"
            key={String(item.id)}
          >
            {console.log(item)}
            <img src={item.image} alt="Foto de prato teste" />
            <div>
              <div className="dish-info">
                <h3>{item.name}</h3>
                <span>{handlePrice(item.price * item.quantity)}</span>
              </div>
              <div className="dish-quantity">
                <Stepper value={item.quantity} />
                <button>Excluir</button>
              </div>
            </div>
          </div>
        ))
        
        }

      </div>

      <span className="total">Total:<strong>{handlePrice(orderTotal)}</strong></span>

      <Button 
        title="Avançar" 
        className="primary"
        onClick={handleButtonAdvance}
      />
    </Container>
  )
}

Cart.propTypes = {
  onAdvance: PropTypes.func,
}