import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './MainPage';
import EditExpensePage from './EditExpensePage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={MainPage} exact={true} />
                <Route path='/edit/:id' component={EditExpensePage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;