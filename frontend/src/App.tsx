import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import MainPage from './pages/MainPage';

import 'bootstrap'
import CartPage from './pages/Cart';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProductPage from './pages/Product';
import ProductEditor from './pages/ProductEditor';
import { fetchCategories, registerUser } from './util/api';

function App() {
    const [ready, setReady] = useState(false);

    fetchCategories().then(_ => setReady(true));

    if (!ready) {
        return (
            <div className="App">
                Loading...
            </div>
        )
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/register" exact component={RegisterPage} />
                    <Route path="/product/:id" component={ProductPage} />
                    <Route path="/create_product" exact component={ProductEditor} />
                    <Route path="/edit_product/:id" exact component={ProductEditor} />
                    <Route path="/cart" exact component={CartPage} />

                    {/* <Route path="/" component={NotFoundPage}/> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
