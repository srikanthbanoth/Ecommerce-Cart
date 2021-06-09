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

  const removeProduct=(index)=>{
    var x= [...cart];
    x.splice(index,1);
    setCart(x);
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
                <Cart cart={cart} removeProduct={removeProduct}/>
              )}
           exact />
        </Switch>
      </BrowserRouter>

    </div>
  );
};

export default App;