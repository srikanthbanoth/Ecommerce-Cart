import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const addProduct = (product) => {
    setCart([...cart, product])
    // console.log(cart)
  }

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shop" render={
            () => (
              <Shop addProduct={addProduct} />
            )} exact />
          <Route path="/cart" 
            render={
              () => (
                <Cart cart={cart} />
              )}
           exact />
        </Switch>
      </BrowserRouter>

    </div>
  );
};

export default App;