import { fetchSinToken } from "../helpers/fetch";

// Solo se pone el return porque es una tarea asíncrona.
export const startLogin = ( username, password ) => {
    return async() => {
        
        const resp = await fetchSinToken('login', { username, password }, 'POST');
        const body = await resp.json();

        console.log(body);
    }
}