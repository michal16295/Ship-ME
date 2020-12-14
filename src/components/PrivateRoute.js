import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import globalConstants from '../constants/globalConstants'


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isLoggedIn()
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
);

function isLoggedIn() {
    const jwt = localStorage.getItem(globalConstants.LOCAL_STR_TOKEN);
    return jwt ? true  : false;
}