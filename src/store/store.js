import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    const middlewareEnhancer = applyMiddleware(thunk);
    const composedEnhancers = composeWithDevTools(middlewareEnhancer);

    const store = createStore(combineReducers({
                                expenses: expensesReducer,
                                filters: filtersReducer
                              }),
                              composedEnhancers);

    return store;
};