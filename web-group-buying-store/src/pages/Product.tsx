import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useHistory, useParams } from 'react-router';
import { ProductCommentProps, ProductProps, MilestoneProps } from '../components/ProductCard';
import ProductComment from '../components/ProductComment';

import MilestoneItem from '../components/MilestoneItem';
import MilestoneProgressBar from '../components/MilestoneProgressBar';
import { CartProductProps } from '../pages/Cart'

import './Product.css'

export type ProductCalculatedRuntimeInfo = {
    curQtty: number;
    maxQuantity: number;
    curPrice: number;
    minPrice: number;
}

function calculateRuntimeInfo(item: ProductProps): ProductCalculatedRuntimeInfo {
    let minPriceMile = { price: item.milestones[0].price + 1 };
    let curPrice;
    let curQtty = item.currentQuantity;
    let nearestMile = { quantity: -1 } as MilestoneProps;
    let biggestMile = { quantity: -1 } as MilestoneProps;
    for (let milestone of item.milestones) {
        if (milestone.quantity > biggestMile.quantity)
            biggestMile.quantity = milestone.quantity;

        if (curQtty > milestone.quantity && milestone.quantity > nearestMile.quantity)
            nearestMile = milestone;

        if (milestone.price < minPriceMile.price) minPriceMile = milestone;
    }

    if (biggestMile.quantity === -1) {
        console.error('Invalid product: no valid milestones. ID = ', item.productID);
    }

    if (nearestMile.quantity === -1) curPrice = -1;
    else curPrice = nearestMile.price;

    return { curQtty, maxQuantity: biggestMile.quantity, curPrice, minPrice: minPriceMile.price };
}



const ProductPage: React.FC = () => {
    let _milesetoneState = useState(-1);
    let [selectedMilestone, selectMilestone] = _milesetoneState;

    let history = useHistory();
    function addToCart(product: ProductProps) {
        let cartProducts = JSON.parse(localStorage.getItem('cart-items') ?? '[]') as CartProductProps[];
        let ind = cartProducts.findIndex(p => p.productID === product.productID)
        if (ind !== -1)
            cartProducts[ind].quantity++;
        else
            cartProducts.push({
                productID: product.productID,
                quantity: 1,
            });
        localStorage.setItem('cart-items', JSON.stringify(cartProducts));
        history.push('/cart')
    }

    const { id } = useParams<{ id: string }>();
    const product = JSON.parse(localStorage.getItem('products') ?? '{}')[id] as ProductProps;

    const runtimeInfo = calculateRuntimeInfo(product);

    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column vh-100">
                <NavBar />

                <div className="row flex-grow-1 my-4">
                    <div className="row g-0 mt-5">
                        <div className=" col-10 col-lg-8 mx-auto">
                            <div className="row bg-light p-3">
                                <div className="card col-6 text-center mx-auto py-3">
                                    <div className="card col-12">
                                        <h4 className="mt-3">{product.title}</h4>
                                        <div className="p-5">
                                            <img src={product.imageURL} className="card-img-top" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text p-5">
                                                {product.description ?? "Produto sem descrição..."}
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div id="milestone-list" className="col-6 d-flex align-items-end flex-column">

                                    {
                                        product.milestones.map((milestone, idx) => (
                                            (selectedMilestone === -1 || selectedMilestone === idx) ?
                                                <MilestoneItem
                                                    milestone={milestone}
                                                    product={product}
                                                    key={`milestone-${idx}`}
                                                    expanded={selectedMilestone === idx}
                                                    onClick={() => selectMilestone(selectedMilestone === idx ? -1 : idx)}
                                                />
                                                : ''
                                        ))
                                    }



                                    <div className="milestone-item row mt-auto mx-auto m-2 w-100" data-milestone="buy"
                                        style={{ order: 99 }}>

                                        <div className="align-self-end text-end w-100">
                                            <a className="justify-self-end" href="#0">
                                                <button className="btn btn-dark add-to-the-cart" onClick={() => addToCart(product)}>
                                                    <span>Adicionar ao carrinho</span>
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                            </a>
                                        </div>
                                        {/* <div className="card-body d-flex flex-column">
                                            <div className="d-flex h-100 flex-row">
                                            </div>
                                        </div> */}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <MilestoneProgressBar product={product} runtimeInfo={runtimeInfo} milestoneState={_milesetoneState} />

                    <div className="row g-0 mt-5" id="comments">
                        <div className="col-11 col-md-8 mx-auto">
                            <div className="col">
                                <div className="row">
                                    <div className="col mx-auto">
                                        <h5>Comentários</h5>
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col-12 mx-auto" id="comment-list">
                                        {
                                            (product.comments?.length ?? 0) > 0?
                                            product.comments?.map(
                                                (comment, idx) =>
                                                    <ProductComment info={comment} key={`comment-${idx}`} />
                                            )
                                            : <span className="d-block text-center text-muted mt-5">Sem comentários ainda...</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5"></div>
                        </div>
                    </div>
                    <Footer />
                </div >
            </div>
        </React.Fragment >
    );
};

export default ProductPage;