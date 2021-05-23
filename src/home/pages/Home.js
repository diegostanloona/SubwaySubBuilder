import React from 'react';
import Button from '../../shared/components/FormElements/Button';

import './Home.css';

const Home = () => {
  return(
    <div className="home">
      <div className="home__slider">
        <img src="assets/images/home.png" alt="" className="home__slider-img hide-on-mobile"/>
        <img src="assets/images/home_mobile.png" alt="" className="home__slider-img hide-on-desktop"/>
      </div>
      <br/>
      <div className="container">
        <div className="row center">
          <Button to="/createSandwich">¡CREA TU SUB!</Button>
        </div>
        <div className="divider"></div>
        <div className="home__cards">
          <div className="home__card-container">
            <div className="card">
              <h4 className="center">Somos la empresa Nº1</h4>
              <br/>
              <img src="assets/images/franquicia.png" alt="" className="center"/>
            </div>
          </div>
          <div className="home__card-container">
            <div className="card">
              <h4 className="center">Adquiere una franquicia</h4>
              <br/>

              <img src="assets/images/oportunidad.png" alt="" className="center"/>
            </div>
          </div>
          <div className="home__card-container">
            <div className="card">
              <h4 className="center">Conoce nuestro menú</h4>
              <br/>
              <img src="assets/images/subs.png" alt="" className="center"/>
            </div>
          </div>
          <div className="home__card-container">
            <div className="card">
              <h4 className="center">¡Visítanos!</h4>
              <br/>
              <img src="assets/images/restaurantes.png" alt="" className="center"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
