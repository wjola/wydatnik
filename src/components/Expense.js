import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Category from './Category';
import EditIcon from '../../images/edit.svg';
import DeleteIcon from '../../images/delete.svg';

const Expense = ({ id, amount = 0, category = '', date = moment(), details = '' }) => {
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
                    <img src={DeleteIcon} className='icon icon--dark' />
                    <Link to={`/edit/${id}`}>
                        <img src={EditIcon} className='icon icon--dark' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Expense;