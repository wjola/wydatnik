import React, { useState } from 'react';
import { categoriesData } from '../reducers/expenses';
import TickIcon from '../../images/tick.svg';

const Category = ({ category, clickable = false, isChosen = false }) => {
    const displayedName = categoriesData.find(el => el.name === category).displayedName;

    return (
        <p
            className={`expense-category expense-category--${category} ${clickable && 'expense-category--clickable'}`}
        >
            {displayedName}
            {clickable && isChosen && <span>
                            <img src={TickIcon} className='icon category__icon' />
                         </span>}
        </p>
    );
}

export default Category;