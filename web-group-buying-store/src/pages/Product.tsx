import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useParams } from 'react-router';
import { ProductCommentProps, ProductProps } from '../components/ProductCard';
import ProductComment from '../components/ProductComment';

const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = JSON.parse(localStorage.getItem('products') ?? '{}')[id] as ProductProps;
    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column vh-100">
                <NavBar />

                <div className="row flex-grow-1 my-4">
                    <div className="row g-0 mt-5">
                        <div className=" col-10 col-md-8  mx-auto">
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
                                    <div className="milestone-item row card mt-auto mx-auto m-2 p-3 w-100" data-milestone="buy"
                                        style={{ order: 99 }}>
                                        <div className="card-header">
                                            Comprar
                                        </div>
                                        <div className="card-body d-none d-flex flex-column">
                                            <h5 className="card-title">Como Comprar</h5>
                                            <p className="card-text">Texto de como comprar.</p>

                                            <div className="d-flex h-100 flex-row">
                                                <div className="align-self-end text-end w-100">
                                                    <a className="justify-self-end" href="../pages/cart.html">
                                                        <button className="btn btn-dark add-to-the-cart">
                                                            <span>Adicionar ao carrinho</span>
                                                            <i className="fa fa-shopping-cart"></i>
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 mt-3">
                        <div className="col-12">
                            <div className="col-8 mx-auto">
                                <div className="row progress position-relative">
                                    <div className="progress-bar  text-center bg-warning" role="progressbar" style={{ width: 0 }}
                                        aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                                        <small className="justify-content-center d-flex position-absolute w-100 text-dark fw-bold">0/0</small>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <nav id="progress-spots" className="mx-auto p-0 align-self-center d-flex flex-row position-relative">

                                </nav>
                            </div>
                        </div>
                    </div>

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
                                            product.comments?.map(
                                                (comment, idx) => 
                                                    <ProductComment info={comment} key={`comment-${idx}`} />
                                            )
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