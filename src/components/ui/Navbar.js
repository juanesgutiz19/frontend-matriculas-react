import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { username } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand">
                { username }
                </span>
                <button 
                    className="btn btn-outline-light" 
                    type="submit"
                    onClick={ handleLogout }
                >
                    Salir</button>
            </div>
        </nav>
    )
}
