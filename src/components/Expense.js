import React from 'react';

const Expense = ({ amount = 0, category = '', date = '01-01-1970', details = '' }) => {
    return (
        <>
            <h1>{amount}</h1>
            <h3>{category}</h3>
            <h5>{date}</h5>
            <p>{details}</p>
        </>
    );
}

export default Expense;