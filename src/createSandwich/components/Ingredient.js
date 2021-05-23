import React from 'react';

import './Ingredient.css';

const Ingredient = props => {


  return(
    <div className={`ingredient ${props.ingredient.active && 'picking'}`} onClick={() => props.onClick(props.ingredient.id)}>
      <img src="assets/images/picker.png" alt="" className="ingredient__picker"/>
        <img src={props.ingredient.image} alt={props.ingredient.name} className="ingredient__ingredient-image"/>
        <h3>{props.ingredient.name}</h3>
    </div>
  )
};

export default Ingredient;
