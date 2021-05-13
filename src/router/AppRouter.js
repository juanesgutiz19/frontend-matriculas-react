import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { AdminScreen } from '../components/Admin/AdminScreen';
import { LoginScreen } from '../components/auth/LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/" component={AdminScreen} />
                    
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
