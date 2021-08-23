import React from 'react';
import { getDisplayedNameForCategory } from '../utils/categoriesData';
import TickIcon from '../../images/tick.svg';

const Category = ({ category, clickable = false, isChosen = false }) => {
    const displayedName = getDisplayedNameForCategory(category);

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