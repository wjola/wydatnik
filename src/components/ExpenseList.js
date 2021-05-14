import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import FiltersList from './FiltersList';

const ExpenseList = (props) => {
    return (
        <div className='expense-list-container'>
            <FiltersList />
            <p>Ostatnie wydatki:</p>
            {props.expenses.map((expense) => {
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
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({ expenses: state });

export default connect(mapStateToProps)(ExpenseList);
