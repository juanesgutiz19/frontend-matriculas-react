import { fetchSinToken } from "../helpers/fetch";
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

export const startRegister = ( username, password) => {
    return async ( dispatch ) => {
        const resp = await fetchSinToken('admins', { username, password }, 'POST');
        const body = await resp.json();
        
        if (body.ok){
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            const { admin } = body
            dispatch( login({
                uid: body.admin._id,
                username: admin.username
            }) );
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

// Acción síncrona
const login = ( user ) => ({
    type: types.authLogin,
    payload: user
})