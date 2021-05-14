import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './MainPage';
import EditExpensePage from './EditExpensePage';
import AddExpense from './AddExpense';
import FiltersPage from './FiltersPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={MainPage} exact={true} />
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route path='/add' component={AddExpense} />
                <Route path='/filters' component={FiltersPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;