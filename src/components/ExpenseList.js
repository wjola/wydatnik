import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import FiltersList from './FiltersList';
import { setExpensesAsync } from '../actions/expenses';

const ExpenseList = ({ expenses, setExpenses }) => {

    useEffect(() => {
        console.log("start");
        setExpenses();
    }, []);

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

const mapStateToProps = (state) => ({ expenses: state.expenses });
const mapDispatchToProps = (dispatch) => ({
        setExpenses: () => dispatch(setExpensesAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
