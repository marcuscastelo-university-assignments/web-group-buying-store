import React from 'react';
import { Link } from 'react-router-dom';
import { isAuth } from '../util/auth-util';

const NavBar: React.FC = () => {
    return (
        <React.Fragment>
            <div className="row" id="top-bar">Sobre nós</div>
            <header className="row" id="heading">
                <div className="col-12 col-md-9 mx-auto" style={{ maxWidth: 1920 }}>
                    <div className="row">
                        <div className="col-4 col-sm-2">
                            <Link to="/">
                                <img className="img" src="/img/logo.png" width={96} alt="Logo" />
                            </Link>

                            

                        </div>
                        <div className="col d-flex align-items-center">
                            <input className="form-control" type="search" size={1} />
                            <span className="px-2 heading-icon">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="row h-100 w-100 d-flex align-items-center ">
                                {
                                    isAuth() ?
                                        <div className="col heading-icon">
                                            <Link to="/cart"><i className="fa fa-shopping-cart" id="cart-icon"></i></Link>
                                        </div>
                                        : ''
                                }
                                <div className="col heading-icon">
                                    <Link to="/login"><i className="fa fa-user" id="cart-icon"></i></Link>
                                </div>
                                {
                                    isAuth() ?
                                        <div className="col heading-icon">
                                            <Link to="/create_product"><i className="fa fa-plus" id="cart-icon"></i></Link>
                                        </div>
                                        : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment >
    )
};

export default NavBar;