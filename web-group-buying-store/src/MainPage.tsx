import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

import './MainPage.css'
import CarouselItem from './components/CarouselItem';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
    const props = { 'id': 'teste123' }
    const TestComp = () => <div className="card">
        <a href="./pages/buypage.html">
            <img src="https://picsum.photos/300"
                className="d-block img-thumbnail mx-auto" alt="item1" />
        </a>
        <div className="card-body px-1 pt-2">
            <div className="row g-0 p-0">
                <div className="col-10" style={{ textTransform: 'capitalize' }}> item1 </div>
            </div>
            <div className="row flex-direction-row mt-2 px-1">
                <div className="col-6">
                    R$25
            </div>
                <div className="col-6 text-end">
                    R$15
            </div>
            </div>
            <div className="progress">
                <div className="progress-bar text-center bg-warning" role="progressbar"
                    style={{ width: "80%" }} aria-valuenow={10} aria-valuemin={0}
                    aria-valuemax={100}>
                    <small
                        className="justify-content-center d-flex position-absolute w-100 text-dark fw-bold">4/5</small>

                </div>
            </div>
        </div>
    </div>
    return (
        <React.Fragment>
            <NavBar />

            {/* <div className="row">
                <nav className="col-9 mx-auto mt-3" id="categories">
                </nav>
            </div>

            <div className="row mt-5">
                <div className="col-9 mx-auto mt-5" id="sales">
                </div>
            </div> */}


            <div className="row mt-5 flex-grow-1">
                <div className="col-9 mx-auto mt-5">
                    <div className="row layer  carousel-container mt-2" id="carousel-sale-0-row">
                        <h4 className="mt-5 w-100 text-center">Interesses</h4>
                        <div className="col-9 mx-auto w-100">
                            <Carousel id="test123" carouselItemsInfo={[1, 2, 3, 4, 5]} itemsPerPage={2} component={TestComp} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment >
    )
};

export default MainPage;