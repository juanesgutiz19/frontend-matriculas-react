import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';
 
import './auth.css';
import { default as graduacion } from '../../assets/svg/graduacion.svg';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm( {
        username: 'juanes4',
        password: '1234'
    } );

    const { username, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(startLogin(username, password));
    }
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
                        <img src={ graduacion } alt="graduacion" className="img-fluid" />
                    </div>
                    <div className="align-self-center w-100 px-lg-5 py-lg-4 p-4">
                        <h1 className="font-weight-bold mb-4">Inicie sesión</h1>
                        <form className="mb-5" onSubmit={ handleLogin }>
                            <div className="mb-4">
                                <label htmlFor ="username" className="form-label font-weight-bold">Usuario</label>
                                <input 
                                    className="form-control bg-dark-x border-0" 
                                    id="username" 
                                    placeholder="Ingresa el usuario" 
                                    name="username"
                                    value={ username }
                                    onChange={handleInputChange}
                                    />
                            </div>
                            <div className="mb-4">
                                <label htmlFor ="inputPassword" className="form-label font-weight-bold">Contraseña</label>
                                <input 
                                    type="password" 
                                    className="form-control bg-dark-x border-0 mb-2" 
                                    placeholder="Ingresa tu contraseña" 
                                    id="inputPassword" 
                                    name="password"
                                    value={ password }
                                    onChange={handleInputChange}
                                    />
                                <a href="/login" id="emailHelp" className="form-text text-muted text-decoration-none">¿Has olvidado tu contraseña?</a>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                        </form>
                        <div className="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 mt-auto w-100">
                            <p className="d-inline-block mb-0 account">¿Eres administrador y no tienes cuenta?</p> <a href="/#" className="text-light font-weight-bold text-decoration-none">Crea una ahora</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}