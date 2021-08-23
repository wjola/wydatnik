import React from 'react';
import Header from './Header';
import ExpenseList from './ExpenseList';
import Navigation from './Navigation';
import useDeviceClass from '../utils/useDeviceClass';

const MainPage = () => {
    const isDesktop = useDeviceClass() === 'desktop';

    return (
        <>
            <Header />
            <ExpenseList />
            {!isDesktop && <Navigation />}
        </>
    );
}

export default MainPage;