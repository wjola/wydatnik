import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';

const ExpenseList = (props) => {
    return props.expenses.map((expense) => {
        return (
            <Expense
                id={expense.id}
                key={expense.amount}
                amount={expense.amount}
                category={expense.category}
                date={expense.date}
                details={expense.details}
            />
        )
    });
}

const mapStateToProps = (state) => ({ expenses: state });

export default connect(mapStateToProps)(ExpenseList);
