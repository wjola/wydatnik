import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
    <Route {...rest} component={(props) => 
        (isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Redirect to='/home' />
        ))}
    />
)}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user & Object.keys(state.user).length > 0
});

export default connect(mapStateToProps)(PrivateRoute);