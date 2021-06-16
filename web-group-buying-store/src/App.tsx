import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import MainPage from './pages/MainPage';

import 'bootstrap'
import CartPage from './pages/Cart';
import { ProductProps } from './components/ProductCard';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProductPage from './pages/Product';

//This is a temporary function used to simulate server-side interacion.
function injectProductsToLocalStorage() {
    const products: {[key: string]: ProductProps}= {
        "41e5b333": 
        {
            productID: '41e5b333',
            currentQuantity: 10,
            imageURL: '.e.e.',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Notebook"
        },
        "790dd7e3": 
        {
            productID: '790dd7e3',
            currentQuantity: 10,
            imageURL: '.e.e.',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Liquidificador"
        },
        "28221d6d": 
        {
            productID: '28221d6d',
            currentQuantity: 10,
            imageURL: '.e.e.',
            milestones: [
                {quantity: 3, price: 10},
                {quantity: 8, price: 8},
                {quantity: 15, price: 5},
            ],
            title: "Asas de borboleta"
        },
    };

    localStorage.setItem('products', JSON.stringify(products));
}

function App() {
    injectProductsToLocalStorage();
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/register" exact component={RegisterPage}/>
                    <Route path="/product/:id" component={ProductPage}/>
                    <Route path="/create_product" exact component={MainPage}/>
                    <Route path="/cart" exact component={CartPage}/>

                    {/* <Route path="/" component={NotFoundPage}/> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
