import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import Header from './Header';

const EditExpensePage = ({ expense }) => {
    return (<>
        <Header />
        <div className='subpage__body'>
            <h2 className='subpage__header'>Edytuj dane o wydatku:</h2>
            <ExpenseForm expense={expense}/>
        </div>
    </>);
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === parseInt(props.match.params.id);
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);