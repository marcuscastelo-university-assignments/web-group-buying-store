import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { ProductProps } from '../types';


const ProductCard: React.FC<ProductProps> = (props: ProductProps) => {
    return (
        <React.Fragment>
            <div className="card h-100" style={{ maxWidth: 200 }}>
                <Link to={`/product/${props.productID}`}>
                    <img src={props.imageURL} className="d-block img-thumbnail mx-auto" alt={props.title} />
                </Link>
                <div className="flex-grow-1"/>
                <div className="card-body px-1 pt-2 flex-grow-0">
                    <div className="row g-0 p-0">
                        <div className="col-10" style={{ textTransform: 'capitalize' }}> {props.title} </div>
                    </div>
                    <div className="row flex-direction-row mt-2 px-1">
                        <div className="col-6">
                            <span>{`R$ ${props.milestones.sort((a, b) => -(a.price - b.price))[0].price}`}</span>
                        </div>
                        <div className="col-6 text-end">
                            <span>{`R$ ${props.milestones.sort((a, b) => a.price - b.price)[0].price}`}</span>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar text-center bg-warning" role="progressbar"
                            style={{ width: "80%" }} aria-valuenow={10} aria-valuemin={0}
                            aria-valuemax={100}>
                            <small
                                className="justify-content-center d-flex position-absolute w-100 text-dark fw-bold">{props.currentQuantity}/{props.milestones.sort((a, b) => -(a.quantity - b.quantity))[0].quantity}</small>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ProductCard;