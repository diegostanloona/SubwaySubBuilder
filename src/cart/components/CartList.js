import React, { useContext } from 'react';

import { CartContext } from '../../shared/context/cart-context';

import CartItem from './CartItem';

const CartList = () => {

  const cart = useContext(CartContext);

  const cartList = cart.cartItems;
  console.log(cartList);

  return(
    <div className="card">
      {cartList.map( item => <CartItem key={item.id} item={item}/>)}
      <h3>Total: {cartList.reduce((a, b) => a+(b.unitPrice*b.quantity), 0)}€</h3>
    </div>
  );
}

export default CartList;
