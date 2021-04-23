import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { addExpense, editExpense } from '../actions/expenses';

const ExpenseForm = ({ expense = {}, addExpense, editExpense }) => {
    const isExpenseEdited = !!expense;

    const [amount, setAmount] = useState(expense.amount || '');
    const [date, setDate] = useState(expense.date || moment());
    const [category, setCategory] = useState(expense.category || '');
    const [details, setDetails] = useState(expense.details || '');
    const [calendarFocused, setCalendarFocused] = useState(false);
    const history = useHistory();

    const onClick = (e) => {
        e.preventDefault();

        const expenseFromForm = {
            amount: parseFloat(amount),
            date,
            category,
            details
        }

        if (isAmountValid()) {
            if (isExpenseEdited) {
                editExpense(expense.id, { ...expenseFromForm });
                history.push('/');
            } else {
                addExpense(...expenseFromForm);
            }

            clearForm();
        }
    }

    const onAmountChange = (e) => {
        const amount = e.target.value;
        const regexp = /^\d+\.\d\d\d$/;

        if (!amount.match(regexp)) {
            setAmount(amount);
        }
    }

    const isAmountValid = () => {
        const regexp = /^([1-9]\d*((\.|\,)\d\d?)?)|(0(\.|\,)\d\d?)$/;

        return amount.match(regexp);
    }

    const clearForm = () => {
        setAmount('');
        setCategory('');
        setDetails('');
        setDate(moment());
    }

    return (
        <form>
            <label htmlFor='amount'>Podaj kwotę</label>
            <input type='number' id='amount' value={amount} onChange={onAmountChange} autoFocus required />
            <label htmlFor='date'>Wybierz datę</label>
            <SingleDatePicker id='date'
                              date={date}
                              onDateChange={date => setDate(date)}
                              focused={calendarFocused}
                              onFocusChange={({ focused }) => setCalendarFocused(focused)}
                              numberOfMonths={1}
                              isOutsideRange={() => false}
            />
            <label htmlFor='category'>Wybierz kategorię</label>
            <select id='category' value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value='groceries'>spożywcze</option>
                <option value='drugstore'>chemia</option>
                <option value='gifts'>prezenty</option>
                <option value='goouts'>wyjścia</option>
                <option value='alcohol'>alkohol</option>
                <option value='home'>domowe</option>
            </select>
            <label htmlFor='details'>Dodaj komentarz</label>
            <textarea id='details' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
            <button onClick={onClick}>{isExpenseEdited ? `Zapisz` : `Dodaj`}</button>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense)),
    editExpense: (id, updates) => dispatch(editExpense(id, updates))
})

export default connect(undefined, mapDispatchToProps)(ExpenseForm);