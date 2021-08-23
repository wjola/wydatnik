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

export const history = createBrowserHistory();

const AppRouter = () => {

    return (
        <Router history={history}>
            <Switch>
                <Route path='/' component={MainPage} exact={true} />
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route path='/add' component={AddExpense} />
                <Route path='/filters' component={FiltersPage} />
                <Route path='/signin' component={SignInPage} />
                <Route path='/signup' component={SignUpPage} />
                <Route path='/home' component={HomePage} />
                <Route path='/charts' component={ChartsPage} />
                <Route path='/user' component={UserPage} />
            </Switch>
        </Router>
    );
}

export default AppRouter;