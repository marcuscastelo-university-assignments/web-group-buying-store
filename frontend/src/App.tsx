import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';

import MainPage from './pages/MainPage';

import 'bootstrap'
import CartPage from './pages/Cart';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProductPage from './pages/Product';
import ProductEditor from './pages/ProductEditor';
import { generateMockCategories } from './util/mock-categories';
import { getProducts, registerUser, updateProducts } from './util/local-storage';
import { genMockProducts } from './util/mock-products';

//This is a temporary function used to simulate server-side interacion.
//TODO: remove on last assignment
function injectProductsToLocalStorage() {
    const products = genMockProducts();
    // updateProducts({...products});
}

function injectCategoriesToLocalStorage() {
    const layers = generateMockCategories();
    localStorage.setItem('categories', JSON.stringify(layers));
}

function App() {
    injectProductsToLocalStorage();
    injectCategoriesToLocalStorage();

    registerUser({
        name: 'Magalu',
        nick: 'magalu',
        password: 'Az1234567890',
        birthday: '28-06-2021',
        email: 'magazine@luiza.mgl',
        profileImage: 'https://tiao-a.magazineluiza.com.br/img/lu-header.png',
        admin: true,
    }, true);

    registerUser({
        name: 'Admin',
        nick: 'admin',
        password: 'admin',
        birthday: '11set',
        email: 'admin@admin.admin',
        profileImage: 'data:image/png;base64,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',
        admin: true,
    }, true);

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/register" exact component={RegisterPage}/>
                    <Route path="/product/:id" component={ProductPage}/>
                    <Route path="/create_product" exact component={ProductEditor}/>
                    <Route path="/edit_product/:id" exact component={ProductEditor}/>
                    <Route path="/cart" exact component={CartPage}/>

                    {/* <Route path="/" component={NotFoundPage}/> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
