import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";


export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:cart`)) || []);

  function addItemToCart(dish, image, quantity) {
    const item = { id: dish.id, image, name: dish.name, price: dish.price, quantity};

    setCartItems(prevState => [...prevState, item]);
  }

  function removeItemFromCart(deleted) {
    const updatedItems = cartItems.filter((item) => item.id !== deleted);
    setCartItems(updatedItems);
  }

  function cleanCart() {
    setCartItems([]);
  }

  const orderTotal = cartItems.reduce((total, item) => {
    return total += item.price;
  }, 0)


  useEffect(() => {
    localStorage.setItem("@foodexplorer:cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{
      cartItems,
      orderTotal,
      addItemToCart,
      removeItemFromCart,
      cleanCart,
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
