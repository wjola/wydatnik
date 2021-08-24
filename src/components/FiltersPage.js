import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Navigation from './Navigation';
import FormInputDateRange from './FormInputDateRange';
import FormInputCategory from './FormInputCategory';
import {
    setAmountFrom,
    setAmountTo,
    includeCategory,
    excludeCategory,
    setStartDate,
    setEndDate,
    sortByAmount,
    sortByDate
} from '../actions/filters';

const FiltersPage = (props) => {
    const [showAmountError, setShowAmountError] = useState(false);
    const [amountFrom, setAmountFrom] = useState(props.filters.amountFrom);
    const [amountTo, setAmountTo] = useState(props.filters.amountTo);
    const history = useHistory();

    const handleAmountFromChange = (amountFrom) => {
        if (isAmountFormatValid(amountFrom)) {
            setAmountFrom(amountFrom);
        }
    }

    const handleAmountToChange = (amountTo) => {
        if (isAmountFormatValid(amountTo)) {
            setAmountTo(amountTo);
        }
    }

    const handleFilterSubmit = () => {
        if (amountFrom < amountTo || amountFrom === null || amountTo === null) {
            !!amountFrom && props.setAmountFrom(amountFrom);
            !!amountTo && props.setAmountTo(amountTo);
            showAmountError && setShowAmountError(false);
            history.push('/');
        } else {
            setShowAmountError(true);
        }
    }

    const handleFilterCancel = () => {
        history.push('/');
    }

    const isAmountFormatValid = (amount) => {
        const regexp = /^()$|(^\d+(\.\d\d?)?$)/;
        
        return amount.toString().match(regexp);
    }

    return (
        <form className='subpage__body container'>
            <h2 className='subpage__header'>Wybierz filtry</h2>
            <fieldset className='filters__criterion'>
                <legend>Podaj zakres kwot:</legend>
                <input
                    className='input filters__input'
                    type='number'
                    name='amount'
                    id='amount-from'
                    value={amountFrom || ''}
                    onChange={e => handleAmountFromChange(e.target.value)}
                />
                <input
                    className='input filters__input'
                    type='number'
                    name='amount'
                    id='amount-to'
                    value={amountTo || ''}
                    onChange={e => handleAmountToChange(e.target.value)}
                />
            </fieldset>
            <div className='filters__criterion'>
                <FormInputCategory
                    selectedCategories={props.filters.categories}
                    handleSelectCategory={props.includeCategory}
                    handleUnselectCategory={props.excludeCategory}
                />
            </div>
            <div className='filters__criterion'>
                <FormInputDateRange
                    startDate={props.filters.startDate}
                    endDate={props.filters.endDate}
                    setStartDate={props.setStartDate}
                    setEndDate={props.setEndDate}
                />
            </div>
            <div className='filters__criterion'>
                <fieldset>
                    <legend>Wybierz sortowanie:</legend>
                    <input
                        type='radio'
                        id='date-sort'
                        name='sort'
                        value='date'
                        onChange={props.sortByDate}
                        checked={props.filters.sortBy === 'date'}
                    />
                    <label htmlFor='date-sort'>po dacie</label>
                    <input
                        type='radio'
                        id='amount-sort'
                        name='sort'
                        value='amount'
                        onChange={props.sortByAmount}
                        checked={props.filters.sortBy === 'amount'}
                    />
                    <label htmlFor='amount-sort'>po kwocie</label>
                </fieldset>
            </div>
            <div className='filters__button-container'>
                <button 
                    className='button button--dark filter-button'
                    onClick={handleFilterCancel}
                >
                    Anuluj
                </button>
                <button 
                    className='button button--full filter-button'
                    onClick={handleFilterSubmit}
                >
                    Zastosuj
                </button>
            </div>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate: (date) => dispatch(setStartDate(date)),
        setEndDate: (date) => dispatch(setEndDate(date)),
        setAmountFrom: (amount) => dispatch(setAmountFrom(amount)),
        setAmountTo: (amount) => dispatch(setAmountTo(amount)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        includeCategory: (category) => dispatch(includeCategory(category)),
        excludeCategory: (category) => dispatch(excludeCategory(category))    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPage);