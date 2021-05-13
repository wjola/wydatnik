import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const defaultExpenses = [
    {
        id: 1,
        amount: 456.78,
        category: 'home',
        date: moment(325987982359),
        details: 'Kwiatki w Castoramie'
    },
    {
        id: 2,
        amount: 123.45,
        category: 'groceries',
        date: moment(10962098901),
        details: 'Zakupy w Lidlu'
    },
    {
        id: 4,
        amount: 12.45,
        category: 'drugstore',
        date: moment(12487489390),
        details: 'Rossmann'
    }
];

const expensesReducer = (state = defaultExpenses, action) => {

    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                {
                    ...action.expense,
                    id: uuidv4()
                }
            ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

export default expensesReducer;