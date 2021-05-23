import React, { useContext } from 'react';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import {
    VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import { CartContext } from '../../shared/context/cart-context';

import './CartForm.css';

const CartForm = () => {

  const cart = useContext(CartContext);

  const [formState, inputHandler] = useForm({
      nombre: {
          value: '',
          isValid: false
      },
      ciudad: {
          value: '',
          isValid: false
      },
      direccion: {
          value: '',
          isValid: false
      },
      codigopostal: {
          value: '',
          isValid: false
      },
      detalles: {
          value: '',
          isValid: true
      }
  }, false);

  const onSubmitHandler = e => {
    alert("Aquí entraría la pantalla de pago");
  }

  return(
    <div className="card">
      <h4 className="center">Ingrese sus datos</h4>
      <form onSubmit={onSubmitHandler}>
      <Input
        id="nombre"
        element="input"
        label="Nombre*"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingrese su nombre"
        onInput={inputHandler}
      />
      <Input
        id="ciudad"
        element="input"
        label="Ciudad*"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingrese su ciudad"
        onInput={inputHandler}
      />
      <Input
        id="direccion"
        element="input"
        label="Direccion*"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingrese su dirección"
        onInput={inputHandler}
      />
      <Input
        id="codigopostal"
        element="input"
        label="Código postal*"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Ingrese su código postal"
        onInput={inputHandler}
      />
      <Input
        id="detalles"
        element="textarea"
        label="Detalles adicionales (Llamar antes de entregar, dejar en la entrada, etc.)"
        validators={[]}
        errorText=""
        onInput={inputHandler}
        initialValid={true}
      />
      <div className="center">
        <Button type="submit" disabled={!formState.isValid || cart.cartItems.length < 1}>Pagar</Button>
      </div>

      </form>
    </div>
  )
};

export default CartForm;
