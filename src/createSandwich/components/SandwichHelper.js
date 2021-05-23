import React, { useState, useEffect } from 'react';

import Button from '../../shared/components/FormElements/Button';

const SandwichHelper = props => {

  const [currentSubIsCompleted, setCurrentSubIsCompleted] = useState(false);

  useEffect(() => {
    if(props.currentSub.Pan.length > 0 && props.currentSub.Carne.length > 0 && props.currentSub.Queso.length > 0 && props.currentSub.Verduras.length > 0 && props.currentSub.Salsas.length > 0){
      setCurrentSubIsCompleted(true);
    }else{
      setCurrentSubIsCompleted(false);
    }
  }, [props.currentSub]);

  return(
    <>
    <h4 className="center">Selecciona el ingrediente deseado:</h4>
    <br/>
    <ul>
      {props.ingredients.filter(i => i.active)[0].types.map(type =>
        <li onClick={(e) => props.ingredientPickHandler(type)}>
          <span>{type.name}</span>
        </li>
      )}
    </ul>
    <div className="divider"></div>
    <div className="create_sandwich__current">
      <h4 className="center">Orden actual</h4>
      <br/>
      <p className="center">Pan: {props.currentSub.Pan.map(i => `${i.name}. `)}</p>
      <p className="center">Carne: {props.currentSub.Carne.map(i => `${i.name}. `)}</p>
      <p className="center">Queso: {props.currentSub.Queso.map(i => `${i.name}. `)}</p>
      <p className="center">Verduras: {props.currentSub.Verduras.map(i => `${i.name}. `)}</p>
      <p className="center">Salsas: {props.currentSub.Salsas.map(i => `${i.name}. `)}</p>
    </div>
    <div className="divider"></div>
    <div className="center create_sandwich__quantity">
      <button onClick={props.decreaseQuantityHandler} className={props.currentSub.quantity === 1 && "disabled"}>-</button>
      <span>{props.currentSub.quantity}</span>
      <button onClick={props.increaseQuantityHandler}>+</button>
    </div>
    <div className="center">
      <Button disabled={!currentSubIsCompleted} onClick={props.addToCartHandler}>Agregar al carrito</Button>
    </div>
    </>
  )
};

export default SandwichHelper;
