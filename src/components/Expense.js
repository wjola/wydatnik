import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import Category from './Category';
import EditIcon from '../../images/edit.svg';
import DeleteIcon from '../../images/delete.svg';
import { removeExpense } from '../actions/expenses';

const Expense = ({ id, amount = 0, category = '', date = moment(), details = '', removeExpense}) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

    return (
        <div className='expense-item' onClick={toggleExpand}>
            <div className='expense-item__header'>
                <h2 className='expense-item__amount'>{amount} zł</h2>
                <h5 className='expense-item__date'>{date.format('D/MM/YYYY')}</h5>
            </div>
            <Category category={category} />
            <div className={`expense-item--${expanded ? 'expanded' : 'hidden'}`}>
                <p className={'expense-item__details'}>{details}</p>
                <div className='expense-item__icon-container'>
                    <button className='icon' onClick={e => removeExpense(id)}>
                        <img src={DeleteIcon} className='icon icon--dark' />
                    </button>
                    <Link to={`/edit/${id}`}>
                        <img src={EditIcon} className='icon icon--dark' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return ({
        removeExpense: (id) => dispatch(removeExpense(id))
    });
}

export default connect(undefined, mapDispatchToProps)(Expense);