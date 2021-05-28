import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import Category from './Category';
import Header from './Header';
import Navigation from './Navigation';
import { categoriesData } from '../reducers/expenses';
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
    const [calendarFocus, setCalendarFocus] = useState(null);

    return (
        <div>
            <Header />
            <div className='filters__body'>
                <h2 className='subpage__header'>Wybierz filtry</h2>
                <fieldset className='filters__criterion'>
                    <legend className='paragraph--wide'>Podaj zakres kwot:</legend>
                    <input
                        className='input filters__input'
                        type='number'
                        name='amount'
                        id='amount-from'
                        value={props.filters.amountFrom || ''}
                        onChange={e => props.setAmountFrom(e.target.value)}
                    />
                    <input
                        className='input filters__input'
                        type='number'
                        name='amount'
                        id='amount-to'
                        value={props.filters.amountTo || ''}
                        onChange={e => props.setAmountTo(e.target.value)}
                    />
                </fieldset>
                <div className='filters__criterion'>
                    <fieldset className='categories-container'>
                        <label>Wybierz kategorie:</label>
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
                                                        props.includeCategory(e.target.value);
                                                    } else {
                                                        props.excludeCategory(e.target.value);
                                                    }                                            
                                                }
                                            }
                                            checked={props.filters.categories.includes(category.name)}
                                        />
                                        <label htmlFor={category.name}>
                                            <Category
                                                category={category.name}                                                
                                                clickable={true}
                                                isChosen={props.filters.categories.includes(category.name)}
                                            />
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </fieldset>
                </div>
                <div className='filters__criterion'>
                    <fieldset className='date-picker'>
                        <label>Wybierz zakres dat:</label>
                        <DateRangePicker
                            daySize={100}
                            startDate={props.filters.startDate}
                            startDateId="startDateId"
                            endDate={props.filters.endDate}
                            endDateId="endDateId"
                            onDatesChange={({ startDate, endDate }) => {
                                props.setStartDate(startDate.startOf('day'));
                                props.setEndDate(endDate.startOf('day'));
                            }}
                            focusedInput={calendarFocus}
                            onFocusChange={focusedInput => setCalendarFocus(focusedInput)}
                            numberOfMonths={1}
                        />
                    </fieldset>
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
                    <Link 
                        to='/'
                        className='filter-button filter-button--dark'
                    >
                        Zastosuj
                    </Link>
                </div>
            </div>
            <Navigation />
        </div>
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
        excludeCategory: (category) => dispatch(excludeCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPage);