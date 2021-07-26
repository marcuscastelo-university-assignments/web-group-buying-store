import React, { FormEventHandler, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link, useHistory } from 'react-router-dom';
import { registerUser, login } from '../util/api';
import { UserProps, DEFAULTS } from '../types';


const RegisterPage: React.FC = () => {
    let [name, setName] = useState<string>('');
    let [nick, setNick] = useState<string>('');
    let [email, setEmail] = useState<string>('');
    let [password, setPassword] = useState<string>('');
    let [address, setAddress] = useState<string>('');
    let [number, setNumber] = useState<string>('');
    let [telephone, setTelephone] = useState<string>('');
    let [passwordConfirm, setPasswordConfirm] = useState<string>('');
    let [birthday, setBirthday] = useState<string>('');
    let [profileImage, /*setProfileImage*/ ] = useState<string>(DEFAULTS.IMG_DEFAULT);

    let history = useHistory();

    const registerCurrentUser: FormEventHandler = async (e) => {
        e.preventDefault();

        if (
            !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) ||
            !/^[0-9]{11,12}$/.test(telephone) ||
            !/^[0-9]+$/.test(number) ||
            !(password.length >= 8 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/))
        ) {
            //Avoids form redirection if failed
            //TODO: notify user
            console.error('e-mail ou senha inválido.')
            return false;
        }

        const user: UserProps = {
            name,
            email,
            nick,
            profileImage,
            password,
            birthday
        }

        if (!registerUser(user)) {
            alert("Usuário ja existe");
            return false;
        }

        await login({nick, password});
        history.push('/');
    }


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
                                        <form id="login-registration-form" action="#0" onSubmit={registerCurrentUser}>
                                            <div className="top-login input-group bg-light border p-3 registration">
                                                <div className="row g-0 w-100">
                                                    <label className="form-label" htmlFor="nome-completo">Nome completo</label>
                                                    <input required name="nome-completo" className="form-control" type="text"
                                                        placeholder="Fulano da silva" value={name} onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div className="row g-0 mt-3 w-100">
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                    <input required name="email" className="form-control" type="email"
                                                        placeholder="fulano@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="row g-0 mt-3 w-100">
                                                    <label className="form-label" htmlFor="birthday">Data de nascimento</label>
                                                    <input required name="birthday" className="form-control text-muted" type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                                                </div>
                                                <div className="row g-0 mt-3 w-100">
                                                    <label className="form-label" htmlFor="telephone">Telefone</label>
                                                    <input required name="telephone" className="form-control text-muted" type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                                                </div>
                                                <div className="row g-0 mt-3 w-100">
                                                    <label className="form-label" htmlFor="address">Endereço</label>
                                                    <input required name="address" className="form-control text-muted" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                                                </div>
                                                <div className="row g-0 mt-3 w-100">
                                                    <label className="form-label" htmlFor="number">Número</label>
                                                    <input required name="number" className="form-control text-muted" type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
                                                </div>
                                            </div>

                                            <div className="input-group bg-light border p-3 mt-3">
                                                <div className="row g-0 w-100">
                                                    <input name="person-name" required className="form-control" type="text"
                                                        placeholder="Login" id="login" value={nick} onChange={(e) => setNick(e.target.value)} />
                                                </div>
                                                <div className="row g-0 mt-3 w-100">
                                                    <input id="password" name="password" required className="form-control" type="password"
                                                        placeholder="Senha" aria-describedby="validationServerUsernameFeedback" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                <div className=" row g-0 mt-3 w-100 registration">
                                                    <input id="password-confirmation" required name="password-confirmation" className="form-control"
                                                        type="password" placeholder="Confirmação de senha" aria-describedby="validationServerUsernameFeedback" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />

                                                    <div id="validationServerUsernameFeedback" className="invalid-feedback ">Senhas não coincidem.</div>
                                                </div>
                                            </div>

                                            <div className="row mt-3 registration">
                                                <div className="col">
                                                    <Link to="/login" id="btn-to-login" className="form-control btn"> Já possuo conta </Link>
                                                </div>
                                                <div className="col">
                                                    <input className="form-control btn btn-dark" type="submit" value="Cadastrar"/>
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