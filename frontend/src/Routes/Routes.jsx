import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Dashboard from '../Components/Dashboard';
import Details from '../Components/Details';

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact render={() => <Login />} />
                <Route path='/SignUp' render={() => <Register />} />
                <Route path='/Dashboard' render={() => <Dashboard />} />
                <Route
                    path='/Details'
                    render={(props) => <Details {...props} />}
                />
                {/* <Route path='/' render={() => <Dashboard />} /> */}
            </Switch>
        </>
    );
};
