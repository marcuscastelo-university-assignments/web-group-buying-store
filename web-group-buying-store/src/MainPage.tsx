import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Footer from './components/Footer';
import NavBar from './components/NavBar';

const MainPage: React.FC = () => {
    return (
        <React.Fragment>
            <NavBar />

            <div className="row">
                <nav className="col-9 mx-auto mt-3" id="categories">
                </nav>
            </div>

            <div className="row mt-5">
                <div className="col-9 mx-auto mt-5" id="sales">
                </div>
            </div>

            <Footer />
        </React.Fragment >
    )
};

export default MainPage;