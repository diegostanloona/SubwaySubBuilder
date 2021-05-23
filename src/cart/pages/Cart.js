import React from 'react';

import CartList from '../components/CartList';
import CartForm from '../components/CartForm';

import './Cart.css';

const Cart = () => {



  return(
    <div className="cart container">
      <div className="cart__list">
        <CartList/>
      </div>
      <div className="cart__form">
        <CartForm/>
      </div>
    </div>
  );
};

export default Cart;
