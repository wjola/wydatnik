import moment from 'moment';

const defaultExpenses = [
    {
        amount: 456.78,
        category: 'Dom',
        date: moment(325987982359),
        details: 'Kwiatki w Castoramie'
    },
    {
        amount: 123.45,
        category: 'Spożywcze',
        date: moment(10962098901),
        details: 'Zakupy w Lidlu'
    },
    {
        amount: 12.45,
        category: 'Chemia',
        date: moment(12487489390),
        details: 'Rossmann'
    }
];

const expensesReducer = (state = defaultExpenses, action) => {

    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        default:
            return state;
    }
};

export default expensesReducer;