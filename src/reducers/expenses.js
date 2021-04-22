const defaultExpenses = [
    {
        amount: 456.78,
        category: 'Dom',
        date: '01-01-2021',
        details: 'Kwiatki w Castoramie'
    },
    {
        amount: 123.45,
        category: 'Spożywcze',
        date: '13-04-2021',
        details: 'Zakupy w Lidlu'
    },
    {
        amount: 12.45,
        category: 'Chemia',
        date: '13-04-2021',
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