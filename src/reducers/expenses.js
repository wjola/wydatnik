import moment from 'moment';
import firebase from 'firebase';
import database from '../firebase/firebase';

const defaultExpenses = [
    {
        id: 1,
        amount: 456.78,
        category: 'car',
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

export const categoriesData = [
    { name: 'groceries', displayedName: 'Spożywcze', colorClass: 'blue', color: '#0185FF'},
    { name: 'alcohol', displayedName: 'Alkohol', colorClass: 'navy', color: '#3139a8'},
    { name: 'drugstore', displayedName: 'Chemia', colorClass: 'turquise', color: '#04CABE'},
    { name: 'home', displayedName: 'Dom', colorClass: 'yellow', color: '#FFC701'},
    { name: 'gifts', displayedName: 'Prezenty', colorClass: 'pink', color: '#a03b9b'},
    { name: 'goouts', displayedName: 'Wyjścia', colorClass: 'red', color: '##9b2d3b'},
    { name: 'car', displayedName: 'Samochód', colorClass: 'orange', color: '#936032'},
    { name: 'flowers', displayedName: 'Kwiaty', colorClass: 'green', color: '#048339'}
];

const expensesReducer = (state = [], action) => {

    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                {
                    ...action.expense
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
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => {
                if(expense.id !== action.id) {
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};

export default expensesReducer;