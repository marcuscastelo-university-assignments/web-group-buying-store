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
import { getProducts, updateProducts } from './util/local-storage';
import { ProductProps } from './types';
import { genMockProducts } from './util/mock-products';

//This is a temporary function used to simulate server-side interacion.
//TODO: remove on last assignment
function injectProductsToLocalStorage() {
    const products = genMockProducts();    
    updateProducts({...getProducts() as {[key: string]: ProductProps}, ...products});
}

function injectCategoriesToLocalStorage() {
    const layers = generateMockCategories();
    localStorage.setItem('categories', JSON.stringify(layers));
}

function App() {
    injectProductsToLocalStorage();
    injectCategoriesToLocalStorage();
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/register" exact component={RegisterPage}/>
                    <Route path="/product/:id" component={ProductPage}/>
                    <Route path="/create_product" exact component={ProductEditor}/>
                    <Route path="/cart" exact component={CartPage}/>

                    {/* <Route path="/" component={NotFoundPage}/> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
