import React from 'react';
import Category from './Category';
import { getCategories } from '../utils/categoriesData';

const FormInputCategory = ({
    selectedCategories,
    handleSelectCategory,
    handleUnselectCategory
}) => {
    return (
        <fieldset className='categories-container'>
            <label>Wybierz kategorię:</label>
            {
                getCategories().map(category => {
                    return (
                        <div className='category__checkbox' key={category}>
                            <input
                                id={category}
                                type='checkbox'
                                className='hidden'
                                name='category'
                                value={category}
                                onChange={
                                    e => {
                                        if(e.target.checked == true) {
                                            handleSelectCategory(e.target.value);
                                        } else {
                                            handleUnselectCategory(e.target.value)
                                        }         
                                    }
                                }
                                checked={selectedCategories.includes(category)}
                            />
                            <label htmlFor={category}>
                                <Category
                                    category={category} 
                                    clickable={true}
                                    isChosen={selectedCategories.includes(category)}
                                />
                            </label>
                        </div>
                    )
                })
            }
        </fieldset>
    );
}

export default FormInputCategory;