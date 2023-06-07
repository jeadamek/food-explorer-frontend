import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from "prop-types";

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:cart`)) || []);

  function addItemToCart(dish, image, quantity) {
    const newItem = { id: dish.id, image, name: dish.name, price: dish.price, quantity};

    const dishInCart = cartItems.some((item) => item.id === newItem.id);
    if (dishInCart) {
      return toast.warn("Prato já está no carrinho");
    }

    setCartItems(prevState => [...prevState, newItem]);
    toast.success(`${newItem.name} adicionado ao carrinho!`)
  }

  function removeItemFromCart(deleted) {
    const updatedItems = cartItems.filter((item) => item.id !== deleted);
    setCartItems(updatedItems);
  }

  function updateDishQuantity(itemId, newQuantity) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {...item, quantity:newQuantity};
      }

      return item;
    });

    setCartItems(updatedCartItems)
  }

  function cleanCart() {
    setCartItems([]);
  }

  const orderTotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  useEffect(() => {
    localStorage.setItem("@foodexplorer:cart", JSON.stringify(cartItems))
  }, [cartItems]);

  return (
    <CartContext.Provider value={{
      cartItems,
      orderTotal,
      addItemToCart,
      removeItemFromCart,
      updateDishQuantity,
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
