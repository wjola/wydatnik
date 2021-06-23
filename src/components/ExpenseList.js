import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import FiltersList from './FiltersList';
import { setExpensesAsync } from '../actions/expenses';
import getSelectedExpenses from '../selectors/selectExpenses';

const ExpenseList = ({ expenses, setExpenses }) => {

    useEffect(() => {
        setExpenses();
    }, []);

    useEffect(() => {

    });

    return (
        <div className='expense-list-container'>
            <FiltersList />
            <p>Ostatnie wydatki:</p>
            {expenses.map((expense) => {
                return (
                    <Expense
                        id={expense.id}
                        key={expense.id}
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

const mapStateToProps = (state) => { 
    return { 
        expenses: getSelectedExpenses(state.expenses, state.filters),
        filters: state.FiltersList
    }; 
};
const mapDispatchToProps = (dispatch) => ({
        setExpenses: () => dispatch(setExpensesAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
