import { useState } from 'react';

export const useCart = () => {

  const [cartItems, setCartItems] = useState([]);

  const addCartItem = item => {
    const newCart = [...cartItems];
    newCart.push(item);
    setCartItems(newCart);
  };

  const removeCartItem = id => {
    const newCart = cartItems.filter(item => item.id !== id);
    setCartItems(newCart);
  };

  const clearCart = () => {
    setCartItems([]);
  }

  return [cartItems, addCartItem, removeCartItem, clearCart];
}
