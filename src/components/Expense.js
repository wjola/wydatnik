import React from 'react';
import moment from 'moment';

const Expense = ({ amount = 0, category = '', date = moment(), details = '' }) => {
    return (
        <>
            <h1>{amount}</h1>
            <h3>{category}</h3>
            <h5>{date.format('D/MM/YYYY')}</h5>
            <p>{details}</p>
        </>
    );
}

export default Expense;