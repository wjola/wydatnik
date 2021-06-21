import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    // const composeEnhancers = 

    const store = createStore(combineReducers({
                                expenses: expensesReducer,
                                filters: filtersReducer
                              }), applyMiddleware(thunk));
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return store;
};