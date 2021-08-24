import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import useDeviceClass from '../utils/useDeviceClass';

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    const isDesktop = useDeviceClass() === 'desktop';

    return (
    <Route {...rest} component={(props) => 
        (isAuthenticated ? (
            <>
                <Header />
                <Component {...props} />
                {!isDesktop && <Navigation />}
            </>
        ) : (
            <Redirect to='/home' />
        ))}
    />
)}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user & Object.keys(state.user).length > 0
});

export default connect(mapStateToProps)(PrivateRoute);