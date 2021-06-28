import React, { FormEventHandler, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link, useHistory } from 'react-router-dom';
import { getUser } from '../util/local-storage';
import { login } from '../util/auth-util';
import userEvent from '@testing-library/user-event';

const LoginPage: React.FC = () => {

    const history = useHistory();

    let [nick, setNick] = useState('');
    let [password, setPassword] = useState('');

    const loginCurrentUser: FormEventHandler = (e) => {
        e.preventDefault();

        if (login(nick, password)) {
            history.push('/');
            return true;
        }
        return false;
    }

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
                                        <form id="login-registration-form" action="#0" onSubmit={loginCurrentUser}>
                                            <div className="input-group bg-light border p-3 mt-3">
                                                <div className="row g-0 w-100">
                                                    <input name="person-name" required className="form-control" type="text"
                                                        placeholder="Login" id="login" value={nick} onChange={(e) => setNick(e.target.value)} />
                                                </div>
                                                <div className="row g-0 mt-3 w-100">
                                                    <input id="password" name="password" required className="form-control" type="password"
                                                        placeholder="Senha" aria-describedby="validationServerUsernameFeedback" value={password} onChange={(e) => setPassword(e.target.value)} />
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