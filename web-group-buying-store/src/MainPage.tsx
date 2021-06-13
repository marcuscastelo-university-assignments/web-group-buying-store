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
    const props = {'id': 'teste123'}
    const TestComp = () => <div style={{ width: 50, height: 50, backgroundColor: 'red' }}>.</div>
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
                    <h3>Produtos</h3>
                    
                    <Carousel id="test123" carouselItemsInfo={[1, 2, 3, 4, 5]} itemsPerPage={2} component={TestComp}/>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>

            <Footer />
        </React.Fragment >
    )
};

export default MainPage;