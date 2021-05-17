import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from '../types/types';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2';

// Solo se pone el return porque es una tarea asíncrona.
export const startLogin = ( username, password ) => {
    // Ese dispatch es gracias al thunk
    return async( dispatch ) => {
        
        const resp = await fetchSinToken('login', { username, password }, 'POST');
        const body = await resp.json();
        
        if (body.ok){
            const token = body.token;
            const decoded = jwt_decode(token);
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: decoded.uid,
                username: username,
                tipoUsuario: body.tipoUsuario
            }) );
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startRegister = ( username, password ) => {
    return async ( dispatch ) => {
        
        const resp = await fetchSinToken('admins', { username, password }, 'POST');
        const body = await resp.json();
        
        if (body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            const userType = 'Admin'
            const { admin } = body
            dispatch( login({
                uid: body.admin._id,
                username: admin.username,
                tipoUsuario: userType
            }) );
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startChecking = () => {
    return async ( dispatch ) => {

        // Es un GET. No se requiere pasar tipo de método.
        const resp = await fetchConToken('login/renew');
        const body = await resp.json();
        
        if (body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            const { user } = body
            dispatch( login({
                uid: body.user._id,
                username: user.username
            }) );
        } else {
            // Token no es correcto, se cancela el cheking (se pondrá en false)
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });

// Acción síncrona
const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

// No se pone startLogout en authReducer porque es algo que puede fallar (por ejemplo saturación de local storage)
export const startLogout = () => {
    return ( dispatch ) => {
        
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => ({ type: types.authLogout });