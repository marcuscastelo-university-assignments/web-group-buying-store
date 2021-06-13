import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { ProductProps } from '../components/ProductCard';

import './Cart.css'

type CartProductProps = {
    productID: number,
    quantity: number,
};

const CartPage: React.FC = _ => {
    let cartProducts: CartProductProps[] = JSON.parse(localStorage.getItem('cart-products')??'[]');
    let products: ProductProps[] = JSON.parse(localStorage.getItem('products')??'[]');
    console.log(products)
    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column vh-100">
                <NavBar />

                <div className="row flex-grow-1">
                    <div className="col-10 col-sm-9 col-md-8 mx-auto pt-3">
                        {
                            (products?.length > 0)
                                ? products.map((product, index) => <CartItem product={product} key={`cart-item-${index}`}/>)
                                : <h3 className="cart__empty my-5">O seu carrinho está vazio.</h3>
                        }

                    </div>
                </div>

                {
                    (products?.length > 0) ?
                        <React.Fragment>
                            <div className="row g-0">
                                <nav className="d-flex" aria-label="Page navigation">
                                    <ul className="pagination pagination mx-auto">
                                        <li className="page-item"><Link className="page-link" to="">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="">3</Link></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="row m-4">
                                <div className="card col-11 col-md-9 mx-auto">
                                    <div className="card-header bg-transparent fw-bold text-large">Pagamento</div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-md bg-light border p-3 px-4">
                                                <form name="credit-card-info">
                                                    <div className="row g-0">
                                                        <label className="text-muted" htmlFor="person-name">Nome completo</label>
                                                        <input name="person-name" className="form-control" type="text"
                                                            placeholder="Fulana da silva" />
                                                    </div>
                                                    <div className="row g-0">
                                                        <label className="text-muted" htmlFor="credit-card">Cartão de crédito</label>
                                                        <input name="credit-card" className="form-control" type="text"
                                                            placeholder="00000-000000000" />
                                                    </div>
                                                    <div className="row g-0">
                                                        <div className="col pe-1">
                                                            <label className="text-muted" htmlFor="credit-card">Validade</label>
                                                            <input name="expiricy-date" className="form-control" type="text" placeholder="MM/YY" />
                                                        </div>
                                                        <div className="col ps-1">
                                                            <label className="text-muted w-100 d-flex" htmlFor="credit-card">
                                                                CVV
                                        <span className="text-end w-100 me-2">
                                                                    <i className="fa fa-exclamation-circle"></i></span></label>

                                                            <input name="expiricy-date" className="form-control" type="text" placeholder="000" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col p-3 px-4">
                                                <form name="credit-address-info">
                                                    <div className="row g-0">
                                                        <label className="text-muted" htmlFor="email">Email</label>
                                                        <input name="email" className="form-control" type="email" placeholder="email@domain.com" />
                                                    </div>

                                                    <div className="row g-0">
                                                        <label className="text-muted" htmlFor="cep">CEP</label>
                                                        <input name="cep" className="form-control" type="text" placeholder="00000-000" />
                                                    </div>
                                                    <div className="row g-0">
                                                        <div className="col-12 col-lg pe-1">
                                                            <label className="text-muted" htmlFor="address">Endereço</label>
                                                            <input name="address" disabled className="form-control" type="text" placeholder="MM/YY" />
                                                        </div>
                                                        <div className="col col-lg-3 px-1">
                                                            <label className="w-100 d-flex" htmlFor="number">Número </label>
                                                            <input name="number" className="form-control" type="text" placeholder="000" />
                                                        </div>
                                                        <div className="col col-lg-3 ps-1">
                                                            <label className="w-100 d-flex" htmlFor="complement">Complemento </label>
                                                            <input name="complement" className="form-control" type="text" placeholder="000" />
                                                        </div>
                                                    </div>
                                                    <div className="row g-0 mt-3">
                                                        <div className="col p-2">
                                                            <span className="cart-total" style={{ fontSize: 'large' }}>
                                                                Total: R$<span className="value"></span>
                                                            </span>
                                                        </div>
                                                        <div className="col text-end">
                                                            <button className="btn btn-dark"> Finalizar compra </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </React.Fragment>
                        : ''
                }

                <Footer />

            </div>

        </React.Fragment>
    );
};

export default CartPage;