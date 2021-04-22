import React from 'react';

const ExpenseForm = () => {
    const onClick = (e) => {
        e.preventDefault();
    }

    return (
        <form>
            <input type='number' />
            <input type='text' />
            <select name='categories' required>
                <option value='groceries'>spożywcze</option>
                <option value='drugstore'>chemia</option>
                <option value='gifts'>prezenty</option>
                <option value='goouts'>wyjścia</option>
                <option value='alcohol'>alkohol</option>
                <option value='home'>domowe</option>
            </select>
            <textarea name='details'></textarea>
            <button onClick={onClick}>Dodaj</button>
        </form>
    );
}

export default ExpenseForm;