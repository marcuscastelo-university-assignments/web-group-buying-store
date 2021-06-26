import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column vh-100">
                <NavBar />

                <div className="row flex-grow-1">
                    <div className="my-4">
                        <div className="card col-11 col-md-8 col-lg-4 col-xl-3 mx-auto">
                            <div className="card-header bg-light fw-bold text-large m-2 registration">Cadastro</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12 col-md">
                                        <form id="login-registration-form" action="../pages/product_creation.html">
                                            <div className="top-login input-group bg-light border p-3 registration">
                                                <div className="row g-0 w-100">
                                                    <label className="form-label" htmlFor="nome-completo">Nome completo</label>
                                                    <input required name="nome-completo" className="form-control" type="text"
                                                        placeholder="Fulano da silva" />
                                                </div>
                                                <div className="row g-0 mt-3 w-100">
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                    <input required name="email" className="form-control" type="email"
                                                        placeholder="fulano@gmail.com" />
                                                </div>
                                                <div className="row g-0 mt-3 w-100">
                                                    <label className="form-label" htmlFor="birthday">Data de nascimento</label>
                                                    <input required name="birthday" className="form-control text-muted" type="date" />
                                                </div>
                                            </div>

                                            <div className="input-group bg-light border p-3 mt-3">
                                                <div className="row g-0 w-100">
                                                    <input name="person-name" required className="form-control" type="text"
                                                        placeholder="Login" id="login" />
                                                </div>
                                                <div className="row g-0 mt-3 w-100">
                                                    <input id="password" name="password" required className="form-control" type="password"
                                                        placeholder="Senha" aria-describedby="validationServerUsernameFeedback" />
                                                </div>
                                                <div className=" row g-0 mt-3 w-100 registration">
                                                    <input id="password-confirmation" required name="password-confirmation" className="form-control"
                                                        type="password" placeholder="Confirmação de senha" aria-describedby="validationServerUsernameFeedback" />

                                                    <div id="validationServerUsernameFeedback" className="invalid-feedback ">Senhas não coincidem.</div>
                                                </div>
                                            </div>

                                            <div className="row mt-3 registration">
                                                <div className="col">
                                                    <Link to="/login" id="btn-to-login" className="form-control btn"> Já possuo conta </Link>
                                                </div>
                                                <div className="col">
                                                    <input className="form-control btn btn-dark" type="submit" value="Cadastrar" />
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

export default RegisterPage