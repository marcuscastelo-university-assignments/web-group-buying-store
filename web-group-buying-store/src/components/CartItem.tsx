import React from 'react';

import { ProductProps } from './ProductCard';

const CartItem: React.FC<{product: ProductProps}> = ({product}) => {
    return (
        <React.Fragment>

<div className="card mb-3 mx-auto " style={{ maxWidth: 740 }}>
                        <div className="row g-0">
                            <div className="col-12 col-sm-2 text-center">
                                <a href="../pages/buypage.html">
                                    <img style={{ width: 96 }}
                                        src="https://http2.mlstatic.com/teclado-e-palmrest-dell-latitude-3490-com-biometria-D_Q_NP_934219-MLB40368160978_012020-Z.webp"
                                        alt="..." />
                                </a>
                            </div>
                            <div className="col-12 col-sm-10 col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">Teclado E Palmrest Dell Latitude 349</h5>
                                    <p className="card-text product-desc">Super Promoção
                                    Absolver para uso em impressoras Epson Impressoras L110 L111 L210 L220 L300 L301 L350
                                    L351 L355 L358 L365 L375 L380 L390 L395 L396 XP204 XP214 XP231 XP241 L455 L465 L475 L495
                                    Atenção é vendido somente o Feltro
                                    Part Number 1577649 / 1627961 / 1569366
                                    Produto 100% novo - Compatível
                                    Produto Vendido com nota fiscal
                            </p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 p-2 bg-light">
                                <div className="row g-0">
                                    <div className="col-12 col-sm-6 col-md-12">
                                        <div className="input-group quantity-group mx-auto" style={{ maxWidth: 150 }}>
                                            <div className="col-12">
                                                <label htmlFor="quantity">Quantidade:</label>
                                            </div>
                                            <span className="input-group-btn">
                                                <button type="button" className="quantity-left-minus btn btn-dark btn-number"
                                                    data-type="minus" data-field="">
                                                    <span className="glyphicon glyphicon-minus">-</span>
                                                </button>
                                            </span>
                                            <input type="text" name="quantity" className="form-control input-number quantity"
                                                value="10" min="1" max="100" step="0" />
                                            <span className="input-group-btn">
                                                <button type="button" className="quantity-right-plus btn btn-dark btn-number"
                                                    data-type="plus" data-field="">
                                                    <span className="glyphicon glyphicon-plus ">+</span>
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-md-12">
                                        <div className="row g-0">
                                            <div className="col-12 text-center mt-2">
                                                <span className="quantity col">
                                                    <span className="value">10</span>x
                                        </span>
                                                <span className="cart-item-price col">
                                                    R$<span className="value">200</span>
                                                </span>
                                            </div>
                                            <div className="col-12 text-center">
                                                <span className="cart-item-total">
                                                    R$<span className="value">2000</span>
                                                </span>
                                            </div>
                                            <div className="col-12 text-center">
                                                <span className="cart-item-remaining-to-decrease">
                                                    Faltam <span className="value">5</span>
                                                </span>
                                                <span className="cart-item-next-value">
                                                    itens para o produto abaixar para R$<span className="value">10</span>
                                                </span>
                                                <span className="cart-item-min-next-value">
                                                    por produto - para um valor mínimo de R$<span className="value">100</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>




        </React.Fragment>
    );
}

export default CartItem;