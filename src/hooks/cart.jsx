import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";


export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);


  function addToCart(dish, image, quantity) {
    const item = [dish.id, image, dish.name, dish.price, quantity];
    setCartItems(prevState => [...prevState, item]);
  }

  return (
    <CartContext.Provider value={{
      addToCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

CartProvider.propTypes = {
  children: PropTypes.object
}

export { CartProvider, useCart};
