import 'react-dates/initialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/main.scss';
import 'react-dates/lib/css/_datepicker.css';
import './styles/react_dates_overrides.css';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/store';
import { firebase } from './firebase/firebase';
import { setExpensesAsync } from './actions/expenses';
import { signIn } from './actions/auth';

const store = configureStore();
let hasRendered = false;

const jsx = (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    );

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<div className="loader"></div>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(setExpensesAsync()).then(() => {
            renderApp();
            if (history.location.pathname === '/signin') {
                history.push('/');
            }
        });
        store.dispatch(signIn(user.providerData[0]));
    } else {
        renderApp();
        history.push('/home');
    }
});