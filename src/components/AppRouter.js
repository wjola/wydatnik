import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MainPage from './MainPage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import EditExpensePage from './EditExpensePage';
import AddExpense from './AddExpense';
import FiltersPage from './FiltersPage';
import HomePage from './HomePage';
import ChartsPage from './ChartsPage';
import UserPage from './UserPage';
import PrivateRoute from '../routers/PrivateRoute';
import PublicRoute from '../routers/PublicRoute';

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