import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
import { useDispatch } from 'react-redux';

import { AdminScreen } from '../components/Admin/AdminScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { startChecking } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch])

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/register" component={RegisterScreen} />
                    <Route exact path="/" component={AdminScreen} />
                    
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
