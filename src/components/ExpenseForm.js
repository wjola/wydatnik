import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { addExpense } from '../actions/expenses';

const ExpenseForm = (props) => {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(moment());
    const [category, setCategory] = useState('');
    const [details, setDetails] = useState('');
    const [calendarFocused, setCalendarFocused] = useState(false);

    const onClick = (e) => {
        e.preventDefault();

        if (isAmountValid()) {
            const expense = {
                amount: parseFloat(amount),
                date,
                category,
                details
            }
            console.log(expense);
            props.addExpense(expense);

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
            <button onClick={onClick}>Dodaj</button>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(ExpenseForm);