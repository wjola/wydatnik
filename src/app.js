import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/main.scss';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import AppRouter from './components/AppRouter';
import configureStore from './store/store';

const store = configureStore();

console.log(store.getState());

const app = (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </MuiPickersUtilsProvider>
    );

ReactDOM.render(app, document.getElementById('app'));