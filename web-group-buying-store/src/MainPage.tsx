import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const MainPage: React.FC = () => {
    return (
        <React.Fragment>
            <head>
                <title>Pagina Principal</title>
                <script src="./js/index.js"></script>
                <link rel="stylesheet" href="./css/index.css" />

            </head>

            <body>
                <div id="top-bar">Sobre nós</div>

                <header className="row" id="heading">
                    <div className="col-12 col-md-9 mx-auto" style={{ maxWidth: 1920 }}>
                        <div className="row">
                            <div className="col-4 col-sm-2">
                                <Link to="/">
                                    <img className="img" src="https://tiao-a.magazineluiza.com.br/img/lu-header.png" alt="Logo" />
                                </Link>
                            </div>
                            <div className="col d-flex align-items-center">
                                <input className="form-control" type="search" size={1} />
                                <span className="px-2 heading-icon">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="row h-100 w-100 d-flex align-items-center ">
                                    <div className="col heading-icon">
                                        <a href="./pages/cart.html"><i className="fa fa-shopping-cart" id="cart-icon"></i></a>
                                    </div>
                                    <div className="col heading-icon">
                                        <a href="./pages/login.html"><i className="fa fa-user" id="cart-icon"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>

                <div className="row">
                    <nav className="col-9 mx-auto mt-3" id="categories">
                    </nav>
                </div>

                <div className="row mt-5">
                    <div className="col-9 mx-auto mt-5" id="sales">
                    </div>
                </div>

                <footer className="row">
                    <div className="col-12 col-md-9 mx-auto">
                        <div className="row">
                            <div className="col-12 col-md mt-3 text-center">
                                <h3>Informações</h3>
                                <ul>
                                    <li><a href="./index.html">Início</a></li>
                                    <li><a href="./pages/cart.html">Carrinho</a></li>
                                    <li>Nossas Lojas</li>
                                    <li>Duvidas na Compra?</li>
                                    <li><a href="http://www.planalto.gov.br/ccivil_03/Leis/L8078.htm">Codigo de Defesa do
                                Consumidor</a></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md mt-3 text-center">
                                <h3>Atendimento</h3>
                                <img alt="Email de contato" src="./img/mail.png" height="30" width="40" />
                                <p>emaildecontato@contato.com</p>
                            </div>
                            <div className="col-12 col-md mt-3">
                                <div className="row text-center">
                                    <div className="col-12">
                                        <h3>Formas de Pagamento</h3>
                                    </div>
                                </div>
                                <div className="d-flex flex-row flex-wrap g-0">
                                    <div className="payment-method">
                                        <img alt="amex" src="./img/pagamentos/amex.png" />
                                    </div>
                                    <div className="payment-method">
                                        <img alt="boleto" src="./img/pagamentos/boleto.png" />
                                    </div>
                                    <div className="payment-method">
                                        <img alt="duble" src="./img/pagamentos/duble.png" />
                                    </div>
                                    <div className="payment-method">
                                        <img alt="elo" src="./img/pagamentos/elo.png" />
                                    </div>
                                    <div className="payment-method">
                                        <img alt="hipercard" src="./img/pagamentos/hipercard.png" />
                                    </div>
                                    <div className="payment-method">
                                        <img alt="hiper" src="./img/pagamentos/hiper.png" />
                                    </div>
                                    <div className="payment-method">
                                        <img alt="mastercard" src="./img/pagamentos/mastercard.png" />
                                    </div>
                                    <div className="payment-method">
                                        <img alt="visa" src="./img/pagamentos/visa.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </React.Fragment>
    )
};

export default MainPage;