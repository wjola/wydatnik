import React from 'react';
import ExpenseForm from './ExpenseForm';
import Header from './Header';

const AddExpense = () => {
    return (<>
        <Header />
        <div className='subpage__body'>
            <h2 className='subpage__header'>Dodaj wydatek:</h2>
            <ExpenseForm />
        </div>
    </>);
}

export default AddExpense;