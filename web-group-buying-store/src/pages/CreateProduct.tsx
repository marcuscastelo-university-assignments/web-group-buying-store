import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const CreateProductPage: React.FC = () => {
    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column vh-100">
                <NavBar />

                <div className="row flex-grow-1 my-4">
                    <div className="col-12">
                        <div className="row g-0  ">
                            <div className=" col-10 col-md-8  mx-auto">
                                <div className="row bg-light p-3">
                                    <div className="card col-6 text-center mx-auto py-3">
                                        <div className="card col-12 p-3">
                                            <input className="form-control text-center" required style={{ fontSize: '2em' }} type="text" placeholder="Título do produto" />

                                            <input className="form-control mt-3" name="product-img-inp" id="product-img-inp" type="file" accept="image/*"/>
                                            <img id="product-img-preview" src="https://www.mepal.com/en/604/0/0/1/ffffff00/c7f95583/804ad0799752a78eb4aa8a7e32ab0714eb1020bd1940397a16d6903d353aca89/water-bottle-ellipse-500ml-white.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text p-0">
                                                    <textarea className="form-control text-center" required style={{ fontSize: '1.2em' }} placeholder="Descrição do produto"></textarea>
                                                </p>
                                                <input type="submit" className="form-control bg-dark text-white mt-5" value="Publicar" />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="milestone-list" className="col-6 d-flex flex-column">
                                        {/* <!-- JS --> */}
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 mt-3">
                                <div className="col-12">
                                    <div className="col-8 mx-auto">
                                        <div className="row progress position-relative">
                                            <div className="progress-bar p-0 text-center bg-warning" role="progressbar"
                                                style={{ width: 0 }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                                                <small
                                                    className="justify-content-center d-flex position-absolute w-100 text-dark fw-bold">0/0</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <nav id="progress-spots"
                                            className="mx-auto p-0 align-self-center d-flex flex-row position-relative">
                                            {/* <!--Populated JS--> */}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5"></div>
                    <Footer />
                </div >
            </div>
        </React.Fragment >
    );
};

export default CreateProductPage;