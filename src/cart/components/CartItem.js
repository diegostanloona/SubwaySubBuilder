import React, { useContext } from 'react';

import Button from '../../shared/components/FormElements/Button';

import { CartContext } from '../../shared/context/cart-context';

import './CartItem.css';

const CartItem = props => {

  const cart = useContext(CartContext);

  const removeCartItemHandler = () => {
    cart.removeCartItem(props.item.id);
  }

  return(
    <div className="cart_item">
      <div className="cart_item__info">
        <h5><span>Pan:</span> {props.item.sub.Pan.map(i => `${i.name}. `)}</h5>
        <h5><span>Carne:</span> {props.item.sub.Carne.map(i => `${i.name}. `)}</h5>
        <h5><span>Queso:</span> {props.item.sub.Queso.map(i => `${i.name}. `)}</h5>
        <h5><span>Verduras:</span> {props.item.sub.Verduras.map(i => `${i.name}. `)}</h5>
        <h5><span>Salsas:</span> {props.item.sub.Salsas.map(i => `${i.name}. `)}</h5>
        <h5><span>Cantidad:</span> {props.item.quantity}</h5>
        <h5><span>Precio: </span> {props.item.unitPrice*props.item.quantity}€</h5>
      </div>
      <div className="cart_item__action">
        <Button danger onClick={removeCartItemHandler}>X</Button>
      </div>
    </div>
  );
};

export default CartItem;
