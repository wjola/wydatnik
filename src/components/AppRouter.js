import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './MainPage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import EditExpensePage from './EditExpensePage';
import AddExpense from './AddExpense';
import FiltersPage from './FiltersPage';
import HomePage from './HomePage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={MainPage} exact={true} />
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route path='/add' component={AddExpense} />
                <Route path='/filters' component={FiltersPage} />
                <Route path='/signin' component={SignInPage} />
                <Route path='/signup' component={SignUpPage} />
                <Route path='/home' component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;