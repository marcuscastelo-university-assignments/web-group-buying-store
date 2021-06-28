import React, { FormEventHandler, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { getCartItem, getCartItems, getProduct, updateCartItem, updateCartItems, updateProduct } from '../util/local-storage';
import { calculateRuntimeInfo } from '../util/product-utlls';

import './Cart.css'

export type CartProductProps = {
    productID: string,
    quantity: number,
};


function calcTotal() {
    //TODO: price
    return getCartItems().reduce((total, item) => total + item.quantity * (calculateRuntimeInfo(getProduct(item.productID)).currentMilestone?.price??NaN), 0);
}

const CartPage: React.FC = _ => {
    let cartProducts = getCartItems()

    let [ total, setTotal ] = useState(calcTotal());
    const onItemChanged = () => setTotal(calcTotal());

    let [ name, setName ] = useState<string>("");
    let [ credit, setCredit ] = useState<string>("");
    let [ expiration, setExpiration ] = useState<string>("");
    let [ cvv, setCvv ] = useState<string>("");
    let [ email, setEmail ] = useState<string>("");
    let [ cep, setCep ] = useState<string>("");
    let [ address, setAddress ] = useState<string>("");
    let [ telephone, setTelephone ] = useState<string>("");
    let [ number, setNumber ] = useState<string>("");
    let [ complement, setComplement ] = useState<string>("");

    const history = useHistory();

    const endBuying: FormEventHandler = (e) => {
        e.preventDefault();
        if( !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) ||
            !/^[0-9]{16}$/.test(credit) ||
            !/^[0-9]+$/.test(number) ||
            !/^[0-9]{8}$/.test(cep) ||
            !/^[0-9]{3}$/.test(cvv)
            //Conditions of data to invalidate it
        ){
            console.log('alsd')
            return<></>;
        }

        for (let item of cartProducts) {
            const product = getProduct(item.productID);
            product.currentQuantity = item.quantity;
            updateProduct(product);
        }

        updateCartItems([]);
        history.push('/cart');
    };

    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column vh-100">
                <NavBar />

                <div className="row flex-grow-1">
                    <div className="col-10 col-sm-9 col-md-8 mx-auto pt-3">
                        {
                            (cartProducts?.length > 0)
                                ? cartProducts.map((product, index) => <CartItem itemInfo={product} key={`cart-item-${index}`} onChanged={onItemChanged}/>)
                                : <h3 className="cart__empty my-5">O seu carrinho está vazio.</h3>
                        }

                    </div>
                </div>

                {
                    (cartProducts?.length > 0) ?
                        <React.Fragment>
                            <div className="row m-4">
                                <div className="card col-11 col-md-9 mx-auto">
                                    <div className="card-header bg-transparent fw-bold text-large">Pagamento</div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-md bg-light border p-3 px-4">
                                                <form name="credit-card-info">
                                                    <div className="row g-0">
                                                        <label className="text-muted" htmlFor="person-name">Nome completo</label>
                                                        <input value={name} onChange={(e) => setName(e.target.value)} name="person-name" className="form-control" type="text"
                                                            placeholder="Fulana da silva" />
                                                    </div>
                                                    <div className="row g-0">
                                                        <label className="text-muted" htmlFor="credit-card">Cartão de crédito</label>
                                                        <input value={credit} onChange={(e) => setCredit(e.target.value)} name="credit-card" className="form-control" type="text"
                                                            placeholder="00000-000000000" />
                                                    </div>
                                                    <div className="row g-0">
                                                        <div className="col pe-1">
                                                            <label className="text-muted" htmlFor="credit-card">Validade</label>
                                                            <input value={expiration} onChange={(e) => setExpiration(e.target.value)} name="expiricy-date" className="form-control" type="text" placeholder="MM/YY" />
                                                        </div>
                                                        <div className="col ps-1">
                                                            <label className="text-muted w-100 d-flex" htmlFor="credit-card">
                                                                CVV
                                        <span className="text-end w-100 me-2">
                                                                    <i className="fa fa-exclamation-circle"></i></span></label>

                                                            <input value={cvv} onChange={(e) => setCvv(e.target.value)} name="cvv" className="form-control" type="text" placeholder="000" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col p-3 px-4">
                                                <form name="credit-address-info">
                                                    <div className="row g-0">
                                                        <label className="text-muted" htmlFor="email">Email</label>
                                                        <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" className="form-control" type="email" placeholder="email@domain.com" />
                                                    </div>

                                                    <div className="row g-0">
                                                        <label className="text-muted" htmlFor="cep">CEP</label>
                                                        <input value={cep} onChange={(e) => setCep(e.target.value)} name="cep" className="form-control" type="text" placeholder="00000-000" />
                                                    </div>
                                                    <div className="row g-0">
                                                        <div className="col-12 col-lg pe-1">
                                                            <label className="text-muted" htmlFor="telephone">Telefone</label>
                                                            <input value={telephone} onChange={(e) => setTelephone(e.target.value)} name="telephone" className="form-control" type="text" placeholder="000 00000-0000" />
                                                        </div>
                                                        <div className="col-12 col-lg pe-1">
                                                            <label className="text-muted" htmlFor="address">Endereço</label>
                                                            <input value={address} onChange={(e) => setAddress(e.target.value)} name="address" className="form-control" type="text" placeholder="Rua dos Alfeneiros, no4" />
                                                        </div>
                                                        <div className="col col-lg-3 px-1">
                                                            <label className="w-100 d-flex" htmlFor="number">Número </label>
                                                            <input value={number} onChange={(e) => setNumber(e.target.value)} name="number" className="form-control" type="text" placeholder="000" />
                                                        </div>
                                                        <div className="col col-lg-3 ps-1">
                                                            <label className="w-100 d-flex" htmlFor="complement">Complemento </label>
                                                            <input value={complement} onChange={(e) => setComplement(e.target.value)} name="complement" className="form-control" type="text" placeholder="000" />
                                                        </div>
                                                    </div>
                                                    <div className="row g-0 mt-3">
                                                        <div className="col p-2">
                                                            <span className="cart-total" style={{ fontSize: 'large' }}>
                                                                Total: R${total}
                                                            </span>
                                                        </div>
                                                        <div className="col text-end">
                                                            <button className="btn btn-dark" onClick={endBuying}> Finalizar compra </button>
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