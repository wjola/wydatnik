import React from 'react';
import { Router, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MainPage from '../components/MainPage';
import SignInPage from '../components/SignInPage';
import SignUpPage from '../components/SignUpPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpense from '../components/AddExpense';
import FiltersPage from '../components/FiltersPage';
import HomePage from '../components/HomePage';
import ChartsPage from '../components/ChartsPage';
import UserPage from '../components/UserPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => {

    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute path='/' component={MainPage} exact={true} />
                <PrivateRoute path='/edit/:id' component={EditExpensePage} />
                <PrivateRoute path='/add' component={AddExpense} />
                <PrivateRoute path='/filters' component={FiltersPage} />
                <PublicRoute path='/signin' component={SignInPage} />
                <PublicRoute path='/signup' component={SignUpPage} />
                <PublicRoute path='/home' component={HomePage} />
                <PrivateRoute path='/charts' component={ChartsPage} />
                <PrivateRoute path='/user' component={UserPage} />
            </Switch>
        </Router>
    );
}

export default AppRouter;