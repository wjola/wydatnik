import React from 'react';

export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}

