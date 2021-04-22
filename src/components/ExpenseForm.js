import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const ExpenseForm = (props) => {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [details, setDetails] = useState('');

    const onClick = (e) => {
        e.preventDefault();
        console.log(amount, category, details);
        const expense = {
            amount,
            date,
            category,
            details
        }
        props.addExpense(expense);
        setAmount('');
        setCategory('');
        setDetails('');
    }

    return (
        <form>
            <label htmlFor='amount'>Podaj kwotę</label>
            <input type='number' id='amount' value={amount} onChange={(e) => setAmount(e.target.value)} autoFocus required />
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