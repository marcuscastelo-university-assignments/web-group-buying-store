import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { ProductProps } from '../types';
import { getCurrentUserNick, isAdmin, isAuth } from '../util/auth-util';
import { calculateRuntimeInfo } from '../util/product-utlls';
import { removeProduct } from '../util/api';
import ProductCommentEditor from './ProductCommentEditor';
import ProductEditor from '../pages/ProductEditor';

const ProductCard: React.FC<ProductProps> = (product) => {
    const history = useHistory();
    const runtimeinfo = calculateRuntimeInfo(product);

    const deleteProduct = () => {
        removeProduct(product.productId);
        history.push('/');
    }

    const editProduct = () => history.push(`/edit_product/${product.productId}`);

    return (
        <React.Fragment>
            <div className="card h-100" style={{ maxWidth: 200 }}>
                <Link to={`/product/${product.productId}`}>
                    <img src={product.imageURL} className="d-block img-thumbnail mx-auto" alt={product.title} />
                </Link>
                <div className="flex-grow-1"/>
                <div className="card-body px-1 pt-2 flex-grow-0">
                    <div className="row g-0 p-0">
                        <div className="col-10" style={{ textTransform: 'capitalize' }}> {product.title} - {product.productId} </div>
                    </div>
                    <div className="row flex-direction-row mt-2 px-1">
                        <div className="col-6">
                            <span>{`R$ ${product.milestones.sort((a, b) => -(a.price - b.price))[0].price}`}</span>
                        </div>
                        <div className="col-6 text-end">
                    
                            <span>{`R$ ${product.milestones.sort((a, b) => a.price - b.price)[0].price}`}</span>
                        </div>
                    </div>

                    <div className="progress">
                        <div className="progress-bar text-center bg-warning" role="progressbar"
                            style={{ width: "80%" }} aria-valuenow={10} aria-valuemin={0}
                            aria-valuemax={100}>
                            <small
                                className="justify-content-center d-flex position-absolute w-100 text-dark fw-bold">{product.currentQuantity}/{runtimeinfo.lastMilestone?.quantity}</small>
                        </div>
                    </div>
                    {
                        isAuth() && ((product.creator === getCurrentUserNick()) || isAdmin()) ?
                        <div className="row flex-direction-row mt-2 px-1">
                            {
                                (product.creator === getCurrentUserNick()) ?
                                <a href="#0" onClick={(e) => { e.preventDefault();editProduct()}}>
                                    <div className="text-center" style={{ fontSize: '1.5em', color: 'blue' }} >
                                        <i className="fa fa-edit"></i>
                                    </div>
                                </a>

                                :
                                <a href="#0" onClick={(e) => { e.preventDefault();deleteProduct()}}>
                                    <div className="text-center" style={{ fontSize: '1.5em', color: 'darkred' }} >
                                        <i className="fa fa-trash"></i>
                                    </div>
                                </a>

                            }
                        </div>
                        :
                        ""
                    }

                </div>
            </div>
        </React.Fragment>
    )
};

export default ProductCard;