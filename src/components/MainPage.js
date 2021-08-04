import React from 'react';
import Header from './Header';
import ExpenseList from './ExpenseList';
import Navigation from './Navigation';
import HomePage from './HomePage';

const MainPage = () => {
    return (
        <>
            <Header />
            <ExpenseList />
            <Navigation />
        </>
    );
}

export default MainPage;