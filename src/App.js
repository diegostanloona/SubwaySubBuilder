import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';
import MainNavigation from './shared/components/Navigation/MainNavigation';

import { CartContext } from './shared/context/cart-context';

import { useCart } from './shared/hooks/cart-hook';

import './App.css';

const Home = React.lazy(() => import('./home/pages/Home'));
const CreateSandwich = React.lazy(() => import('./createSandwich/pages/CreateSandwich'));
const Cart = React.lazy(() => import('./cart/pages/Cart'));

function App() {

  const [cartItems, addCartItem, removeCartItem, clearCart] = useCart();

  return (
    <CartContext.Provider value={{cartItems: cartItems, addCartItem: addCartItem, removeCartItem: removeCartItem, clearCart: clearCart}}>
      <Router>
        <MainNavigation/>
          <main>
          <Suspense fallback={<div className="center"><LoadingSpinner></LoadingSpinner></div>}>
            <Switch>
              <Route path="/" exact>
                <Home/>
              </Route>
              <Route path="/createSandwich" exact>
                <CreateSandwich/>
              </Route>
              <Route path="/cart">
                <Cart/>
              </Route>
              <Redirect to="/"/>
            </Switch>
          </Suspense>
          </main>
          <footer>El contenido de este sitio web es propiedad de <a href="https://subwayspain.com/es/" target="_blank" rel="noreferrer">Subway</a>, se utiliza la marca como un ejemplo para una funcionalidad pero no es propiedad de la misma.</footer>
      </Router>
    </CartContext.Provider>

  );
}

export default App;
