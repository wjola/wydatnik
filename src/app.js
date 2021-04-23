import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './components/AppRouter';
import configureStore from './store/store';

const store = configureStore();

console.log(store.getState());

const app = (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );

ReactDOM.render(app, document.getElementById('app'));