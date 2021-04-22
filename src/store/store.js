import { createStore } from 'redux';
import expensesReducer from '../reducers/expenses';

export default () => {
    const store = createStore(expensesReducer);

    return store;
};