import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useHistory, useParams } from 'react-router';
import { ProductProps } from '../components/ProductCard';
import ProductComment from '../components/ProductComment';

import MilestoneItem from '../components/MilestoneItem';
import MilestoneProgressBar from '../components/MilestoneProgressBar';

import './Product.css'
import { getCartItem, getProduct, updateCartItem } from '../util/local-storage';
import { calculateRuntimeInfo } from '../util/product-utlls';

const ProductPage: React.FC = () => {
    let _milesetoneState = useState(-1);
    let [selectedMilestone, selectMilestone] = _milesetoneState;

    let history = useHistory();
    function addToCart({ productID }: ProductProps) {
        const item = getCartItem(productID) ?? { productID, quantity: 0 };
        item.quantity++;
        updateCartItem(item);
        history.push('/cart')
    }

    const { id: productID } = useParams<{ id: string }>();
    const product = getProduct(productID);

    if (!product) {
        history.push('/not-found');
        return (<React.Fragment>Product not found, redirecting...</React.Fragment>);
    }

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

                                    {
                                        runtimeInfo.nextMilestone === null ?
                                            <span className="w-100 text-center text-success fw-bold mt-5">Todas as metas foram atingidas!</span>
                                            : ""
                                    }


                                    <div className="milestone-item row mt-auto mx-auto m-2 w-100" data-milestone="buy"
                                        style={{ order: 99 }}>

                                        <div className="align-self-end text-end w-100 d-flex justify-content-between">
                                            <span className="text-start pt-2">
                                                Preço: R${runtimeInfo.currentMilestone?.price ?? 'Indisponível'}
                                            </span>
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
                                            (product.comments?.length ?? 0) > 0 ?
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