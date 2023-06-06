import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";


export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:cart`)) || []);

  function addToCart(dish, image, quantity) {
    const item = { id: dish.id, image, name: dish.name, price: dish.price, quantity};

    setCartItems(prevState => [...prevState, item]);
  }

  function removeFromCart() {

  }


  useEffect(() => {
    localStorage.setItem("@foodexplorer:cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
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
