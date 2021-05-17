import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
  
import { useDispatch, useSelector } from 'react-redux';


import { AdminScreen } from '../components/Admin/AdminScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { startChecking } from '../actions/auth';
import { Loading } from '../components/ui/Loading';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { StudentScreen } from '../components/Student/StudentScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid, tipoUsuario } = useSelector(state => state.auth);
    let Screen = AdminScreen;

    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch])

    if ( checking ) {
        return (<Loading/>);
    }

    if ( tipoUsuario === 'Admin' ) {
        Screen = AdminScreen;
    } else if (tipoUsuario === 'Student'){
        Screen = StudentScreen;
    }
    
    // ¿Por qué !!uid? !'sdsdsd' --> false, !false --> true, !!null --> false
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated={ !!uid }
                    />
                    <PublicRoute 
                        exact 
                        path="/register" 
                        component={ RegisterScreen } 
                        isAuthenticated={ !!uid }
                        />
                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ Screen } 
                        isAuthenticated={ !!uid }
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
