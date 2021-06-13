import React from 'react';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

import './MainPage.css'
import ProductCard, { ProductProps } from '../components/ProductCard';

const MainPage: React.FC = () => {

    const productMap = JSON.parse(localStorage.getItem('products')??'{}');
    const products = Object.values(productMap) as ProductProps[];

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
                            <Carousel<ProductProps> carouselID="test123" carouselItemsInfo={products} itemsPerPage={5} component={ProductCard} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment >
    )
};

export default MainPage;