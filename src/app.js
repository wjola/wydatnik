import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import MainPage from './components/MainPage';
import configureStore from './store/store';

const store = configureStore();

console.log(store.getState());

const app = (
        <Provider store={store}>
            <MainPage />
        </Provider>
    );

ReactDOM.render(app, document.getElementById('app'));