import React from 'react';
import Header from './Header';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';

const MainPage = () => {
    return (
        <>
            <Header />
            <AddExpense />
            <ExpenseList />
        </>
    );
}

export default MainPage;