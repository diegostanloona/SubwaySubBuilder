import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { uuid } from 'uuidv4';

import Ingredient from './Ingredient';
import Modal from '../../shared/components/UIElements/Modal';
import SandwichHelper from './SandwichHelper';

import { CartContext } from '../../shared/context/cart-context';

import './SandwichBuilder.css';

const SandwichBuilder = () => {

  const [showModal, setShowModal] = useState(false);
  const [currentSub, setCurrentSub] = useState({Pan: [], Carne: [], Queso: [], Verduras: [], Salsas: [], quantity: 1, unitPrice: 10});

  const cart = useContext(CartContext);
  const history = useHistory();

  const [ingredients, setIngredients] = useState([ //Normalmente estos datos vendrían de una REST API utilizando useEffect
    {
      id: 0,
      name: "Pan",
      types: [
        {
          name: "Pan de avena",
          unique: true
        },
        {
          name: "Pan de orégano",
          unique: true
        },
        {
          name: "Pan blanco",
          unique: true
        },
        {
          name: "Pan integral",
          unique: true
        },
      ],
      max: 1,
      image: "assets/images/topbread.png",
      active: true
    },
    {
      id: 1,
      name: "Carne",
      types: [
        {
          name: "Jamón",
          unique: false
        },
        {
          name: "Salami",
          unique: false
        },
        {
          name: "Bacon",
          unique: false
        },
        {
          name: "Pollo",
          unique: false
        },
        {
          name: "Atún",
          unique: false
        },
        {
          name: "Albóndigas",
          unique: false
        },
        {
          name: "Sin carne",
          unique: true
        }
      ],
      max: 2,
      image: "assets/images/bacon.png",
      active: false
    },
    {
      id: 2,
      name: "Queso",
      types: [
        {
          name: "Mozzarella",
          unique: true
        },
        {
          name: "Provolone",
          unique: true
        },
        {
          name: "Cheddar",
          unique: true
        },
        {
          name: "Sin queso",
          unique: true
        }
      ],
      max: 1,
      image: "assets/images/cheese.png",
      active: false
    },
    {
      id: 3,
      name: "Verduras",
      types: [
        {
          name: "Lechuga",
          unique: false
        },
        {
          name: "Tomate",
          unique: false
        },
        {
          name: "Cebolla",
          unique: false
        },
        {
          name: "Pimiento",
          unique: false
        },
        {
          name: "Pepinillos",
          unique: false
        },
        {
          name: "Aceitunas",
          unique: false
        },
        {
          name: "Sin verduras",
          unique: true
        }
      ],
      max: 6,
      image: "assets/images/tomato.png",
      active: false
    },
    {
      id: 4,
      name: "Salsas",
      types: [
        {
          name: "Ranch",
          unique: false
        },
        {
          name: "Ajo",
          unique: false
        },
        {
          name: "Mayonesa",
          unique: false
        },
        {
          name: "Mostaza",
          unique: false
        },
        {
          name: "Sin salsas",
          unique: true
        }
      ],
      max: 3,
      image: "assets/images/sauce.png",
      active: false
    }
  ]);

  const ingredientClickHandler = id => {
    const unactiveIngredients = ingredients.filter(i => i.id !== id);
    const activeIngredient = ingredients.filter(i => i.id === id);
    unactiveIngredients.forEach(i => i.active = false);
    activeIngredient[0].active = true;
    unactiveIngredients.splice(id, 0, activeIngredient[0]);
    setIngredients(unactiveIngredients);
    setShowModal(!showModal);
  };


  const ingredientPickHandler = type => {
    const ingredient = ingredients.filter(i => i.active)[0];
    if(!removeIngredient(ingredient, type) && !checkUniqueIngredient(ingredient, type) && !checkMaxIngredient(ingredient, type) && !insertNotUnique(ingredient, type)){
      const newSub = {...currentSub};
      newSub[ingredient.name].push(type);
      setCurrentSub(newSub);
    }

  };

  const removeIngredient = (ingredient, type) => {
    const newType = currentSub[ingredient.name].filter(i => i.name !== type.name);
    const newSub = {...currentSub};
    if(newType.length < newSub[ingredient.name].length){
      newSub[ingredient.name] = newType;
      setCurrentSub(newSub);
      return true;
    }
    return false;
  };

  const checkUniqueIngredient = (ingredient, type) => {
    if(type.unique){
      const newSub = {...currentSub};
      newSub[ingredient.name] = [type];
      setCurrentSub(newSub);
      return true;
    }
    return false;
  };

  const insertNotUnique = (ingredient, type) => {
    const newSub = {...currentSub};
    let flag = false;
    newSub[ingredient.name].forEach(i => {
      if(i.unique){
        newSub[ingredient.name] = [];
        newSub[ingredient.name].push(type);
        setCurrentSub(newSub);
        flag = true;
      }
    });
    return flag;
  };

  const checkMaxIngredient = (ingredient, type) => {
    const max = ingredients.filter(i => i.name === ingredient.name)[0].max;
    const newSub = {...currentSub};
    if(newSub[ingredient.name].length === max){
      return true;
    }
    return false;
  };

  const increaseQuantityHandler = () => {
    const newSub = {...currentSub};
    newSub.quantity++;
    setCurrentSub(newSub);
  };

  const decreaseQuantityHandler = () => {
    const newSub = {...currentSub};
    if(newSub.quantity > 1){
      newSub.quantity--;
      setCurrentSub(newSub);
    }
  };

  const closeModalHandler = () => {
    setShowModal(false);
  }

  const addToCartHandler = () => {
    const cartItem = {
      id: uuid(),
      sub: {
        Pan: currentSub.Pan,
        Carne: currentSub.Carne,
        Queso: currentSub.Queso,
        Verduras: currentSub.Verduras,
        Salsas: currentSub.Salsas
      },
      quantity: currentSub.quantity,
      unitPrice: currentSub.unitPrice
    };
    cart.addCartItem(cartItem);
    alert("Agregado al carrito");
    history.push('/cart');
  }

  return(
    <>
      <div className="create_sandwich__builder">
        {ingredients.map(i =>
          <Ingredient key={i.id} ingredient={i} onClick={ingredientClickHandler}/>
        )}
      </div>
      <div className="create_sandwich__helper create_sandwich__helper_content">
        <div className="card">
          <br/>
          <SandwichHelper ingredients={ingredients} currentSub={currentSub} decreaseQuantityHandler={decreaseQuantityHandler} increaseQuantityHandler={increaseQuantityHandler} ingredientPickHandler={ingredientPickHandler} addToCartHandler={addToCartHandler}/>
        </div>
      </div>
      <div className="create_sandwich__helper_mobile">
        <div className="create_sandwich__modal_bar" onClick={() => setShowModal(!showModal)}>
          <img src="assets/images/uparrow.png" alt="" className={`center ${showModal && 'active'}`}/>
        </div>
        <Modal show={showModal} onCancel={closeModalHandler} contentClass="create_sandwich__helper_content">
          <SandwichHelper ingredients={ingredients} currentSub={currentSub} decreaseQuantityHandler={decreaseQuantityHandler} increaseQuantityHandler={increaseQuantityHandler} ingredientPickHandler={ingredientPickHandler} addToCartHandler={addToCartHandler}/>
        </Modal>
      </div>
    </>
  );
};

export default SandwichBuilder;
