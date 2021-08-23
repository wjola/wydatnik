import React from 'react';
import Category from './Category';
import { categoriesData } from '../reducers/expenses';

const FormInputCategory = ({
    selectedCategories,
    handleSelectCategory,
    handleUnselectCategory
}) => {
    return (
        <fieldset className='categories-container'>
            <label>Wybierz kategorię:</label>
            {
                categoriesData.map(category => {
                    return (
                        <div className='category__checkbox' key={category.name}>
                            <input
                                id={category.name}
                                type='checkbox'
                                className='hidden'
                                name='category'
                                value={category.name}
                                onChange={
                                    e => {
                                        if(e.target.checked == true) {
                                            handleSelectCategory(e.target.value);
                                        } else {
                                            handleUnselectCategory(e.target.value)
                                        }                                            
                                    }
                                }
                                checked={selectedCategories.includes(category.name)}
                            />
                            <label htmlFor={category.name}>
                                <Category
                                    category={category.name}                                                
                                    clickable={true}
                                    isChosen={selectedCategories.includes(category.name)}
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