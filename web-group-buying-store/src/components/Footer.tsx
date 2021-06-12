import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const Footer: React.FC = () => {
    return (
        <React.Fragment>
            <footer className="row">
                <div className="col-12 col-md-9 mx-auto">
                    <div className="row">
                        <div className="col-12 col-md mt-3 text-center">
                            <h3>Informações</h3>
                            <ul>
                                <li><Link to="/">Início</Link></li>
                                <li><Link to="/cart">Carrinho</Link></li>
                                <li>Nossas Lojas</li>
                                <li>Duvidas na Compra?</li>
                                <li><Link to="http://www.planalto.gov.br/ccivil_03/Leis/L8078.htm">Codigo de Defesa do Consumidor</Link></li>
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
        </React.Fragment>
    )
};

export default Footer;