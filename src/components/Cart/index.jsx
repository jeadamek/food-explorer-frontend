import PropTypes from 'prop-types';

import { Container } from "./styles";

import { Button } from "../Button";
import { Stepper } from "../Stepper";

export function Cart({onAdvance}) {

  const src = "/public/salada-molla.png"
  const name = "Salada Radish";
  const price = 10.99;
  const orderTotal = 103.98;
  const value = 1;

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
          {/* renderizar itens carrinho */}
        <div className="order">
          <img src={src} alt="Foto de prato teste" />
          <div>
            <div className="order-info">
              <h3>{name}</h3>
              <span>{handlePrice(price)}</span>
            </div>
            <div className="edit-order">
              <Stepper value={value} />
              <button>Excluir</button>
            </div>
          </div>
        </div>
        {/* Renderizar ate aqui */}


        {/* renderizar itens carrinho */}
        <div className="order">
          <img src={src} alt="Foto de prato teste" />
          <div>
            <div className="order-info">
              <h3>{name}</h3>
              <span>{handlePrice(price)}</span>
            </div>
            <div className="edit-order">
              <Stepper value={value} />
              <button>Excluir</button>
            </div>
          </div>
        </div>
        {/* Renderizar ate aqui */}

        {/* renderizar itens carrinho */}
        <div className="order">
          <img src={src} alt="Foto de prato teste" />
          <div>
            <div className="order-info">
              <h3>{name}</h3>
              <span>{handlePrice(price)}</span>
            </div>
            <div className="edit-order">
              <Stepper value={value} />
              <button>Excluir</button>
            </div>
          </div>
        </div>
        {/* Renderizar ate aqui */}

        {/* renderizar itens carrinho */}
        <div className="order">
          <img src={src} alt="Foto de prato teste" />
          <div>
            <div className="order-info">
              <h3>{name}</h3>
              <span>{handlePrice(price)}</span>
            </div>
            <div className="edit-order">
              <Stepper value={value} />
              <button>Excluir</button>
            </div>
          </div>
        </div>
        {/* Renderizar ate aqui */} 
      </div>

      <span className="total">{`Total: ${handlePrice(orderTotal)}`}</span>

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