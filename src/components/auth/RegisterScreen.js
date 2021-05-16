import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';
import { startRegister } from '../../actions/auth';

import './auth.css';
import { default as graduacion } from '../../assets/svg/graduacion.svg';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm( {
        username: 'juancho19',
        password: '1234',
        passwordConfirmation: '1234'
    } );

    const { username, password, passwordConfirmation } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== passwordConfirmation) {
            return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error');
        }

        dispatch( startRegister( username, password ) );
    }

    return (
        <div className="background">
            <div className="row g-0">
                <div className="col-lg-12 bg-dark d-flex flex-column align-items-end min-vh-100">
                    <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 m-auto w-50">
                        <img src={ graduacion } alt="graduacion" className="img-fluid img-fluid-register" />
                    </div>
                    <div className="align-self-center w-50 px-lg-5 py-lg-4 p-4">
                        <h1 className="font-weight-bold mb-4">Regístrese</h1>
                        <form className="mb-5" 
                        onSubmit={ handleRegister }
                        >
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
                            </div>

                            <div className="mb-4">
                                <label htmlFor ="inputPasswordConfirmation" className="form-label font-weight-bold">Confirmar contraseña</label>
                                <input 
                                    type="password" 
                                    className="form-control bg-dark-x border-0 mb-2" 
                                    placeholder="Confirma la contraseña" 
                                    id="inputPasswordConfirmation" 
                                    name="passwordConfirmation"
                                    value={ passwordConfirmation }
                                    onChange={handleInputChange}
                                    />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
