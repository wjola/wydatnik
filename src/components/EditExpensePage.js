import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import Header from './Header';

const EditExpensePage = ({ expense }) => {
    console.log(expense);
    return (<>
        <Header />
        <div className='subpage__body container'>
            <h2 className='subpage__header'>Edytuj dane o wydatku:</h2>
            <ExpenseForm expense={expense}/>
        </div>
    </>);
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);