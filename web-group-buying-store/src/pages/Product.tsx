import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ProductPage: React.FC = () => {
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
                                        <img src="../img/a.jpeg" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">
                                                Patos fresquinhos Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, magni. Eu gosto de patos
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
                                    <div className="progress-bar  text-center bg-warning" role="progressbar" style={{width:0}}
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


                                        <div className="row g-0 mt-1 ">
                                            <div className="col card mx-auto">
                                                <div className="row g-2 g-md-0">
                                                    <div className="col-12 col-md-2 border mx-auto bg-light">
                                                        <div className="row g-0">
                                                            <div className="col-2 col-md-12 text-center">
                                                                <img className="img-fluid"
                                                                    src="https://tiao-a.magazineluiza.com.br/img/lu-header.png" alt="" />
                                                            </div>
                                                            <div className="col col-md-12 d-flex">
                                                                <span className="align-self-end text-center">Fulana da Silva Tavares</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col p-3">
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-1 fluid comment-rating">
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                                <span className="fa fa-star"></span>
                                                            </div>
                                                            <div className="px-2">
                                                                <h5>Odiei</h5>
                                                            </div>
                                                        </div>
                                                        <p>
                                                            Que site horrível, odeio todo mundo que usa, usou ou vai usar esse site, inclusive eu mesmo. <br /> Vai todo mundo pra um lugar bem longe, seus miseráveis!!
                                                        </p>
                                                        <div className="row">
                                                            <div className="col">
                                                                <span className="fa fa-thumbs-o-up"></span>
                                                                <span className="fa fa-thumbs-o-down"></span>
                                                            </div>
                                                            <div className="col">
                                                                <span className="fa fa-share-alt"></span>
                                                                <span className="fa fa-reply"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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