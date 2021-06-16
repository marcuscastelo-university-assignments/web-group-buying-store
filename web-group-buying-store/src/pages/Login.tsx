import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column vh-100">
                <NavBar />

                <div className="row flex-grow-1">
                    <div className="my-4">
                        <div className="card col-11 col-md-8 col-lg-4 col-xl-3 mx-auto">
                            <div className="card-header bg-light fw-bold text-large m-2 login">Login</div>
                            <div className="card-header bg-light fw-bold text-large m-2 registration d-none">Cadastro</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 col-md">
                                        <form id="login-registration-form" action="../pages/product_creation.html">
                                         <div className="input-group bg-light border p-3 mt-3">
                                                <div className="row g-0 w-100">
                                                    <input name="person-name" required className="form-control" type="text"
                                                        placeholder="Login" id="login" />
                                                </div>
                                                <div className="row g-0 mt-3 w-100">
                                                    <input id="password" name="password" required className="form-control" type="password"
                                                        placeholder="Senha" aria-describedby="validationServerUsernameFeedback" />
                                                </div>
                                            </div>

                                            <div className="row mt-3 login">
                                                <div className="col">
                                                    <Link to="/register" id="btn-to-registration" className="form-control btn"> Criar conta </Link>
                                                </div>
                                                <div className="col">
                                                    <input id="go-login" className="form-control btn btn-dark" type="submit" value="Login" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                <Footer />
            </div>
        </React.Fragment>
    )
};

export default LoginPage