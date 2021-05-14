import React from 'react';
import './login.css';
import { default as graduacion } from '../../assets/svg/graduacion.svg';

export const LoginScreen = () => {
    return (
        <div className="background">
            <div className="row g-0">
                <div className="col-lg-7 d-none d-lg-block">
                    <div id="carouselExampleCaptions" >
                        <div className="carousel-inner">
                            <div className="carousel-item img-1 min-vh-100 active">
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="font-weight-bold">Sistema de matrícula estudiantil</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 bg-dark d-flex flex-column align-items-end min-vh-100">
                    <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 mb-auto w-100">
                        <img src={graduacion} alt="graduacion" className="img-fluid" />
                    </div>
                    <div className="align-self-center w-100 px-lg-5 py-lg-4 p-4">
                        <h1 className="font-weight-bold mb-4">Inicie sesión</h1>
                        <form className="mb-5">
                            <div className="mb-4">
                                <label for="exampleInputEmail1" className="form-label font-weight-bold">Email</label>
                                <input type="email" className="form-control bg-dark-x border-0" id="exampleInputEmail1" placeholder="Ingresa tu email" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-4">
                                <label for="exampleInputPassword1" className="form-label font-weight-bold">Contraseña</label>
                                <input type="password" className="form-control bg-dark-x border-0 mb-2" placeholder="Ingresa tu contraseña" id="exampleInputPassword1" />
                                <a href="/#" id="emailHelp" className="form-text text-muted text-decoration-none">¿Has olvidado tu contraseña?</a>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                        </form>
{/* 
                        <p className="font-weight-bold text-center text-muted">O inicia sesión con</p>
                        <div className="d-flex justify-content-around">
                            <button type="button" className="btn btn-outline-light flex-grow-1 mr-2"><i className="fab fa-google lead mr-2"></i> Google</button>
                            <button type="button" className="btn btn-outline-light flex-grow-1 ml-2"><i className="fab fa-facebook-f lead mr-2"></i> Facebook</button>
                        </div> */}
                        <div className="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 mt-auto w-100">
                            <p className="d-inline-block mb-0 account">¿Todavia no tienes una cuenta?</p> <a href="/#" className="text-light font-weight-bold text-decoration-none">Crea una ahora</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}