import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';

import 'bootstrap'
import CartPage from './pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/login" exact component={MainPage}/>
          <Route path="/register" exact component={MainPage}/>
          <Route path="/product/:id" component={MainPage}/>
          <Route path="/create_product" exact component={MainPage}/>
          <Route path="/cart" exact component={CartPage}/>

          {/* <Route path="/" component={NotFoundPage}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
