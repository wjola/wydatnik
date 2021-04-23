import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = ({ expense }) => {
    return (
        <>
            <h2>Edytuj dane o wydatku</h2>
            <ExpenseForm expense={expense}
            />
        </>
    );
}

const mapStateToProps = (state, props) => {
    console.log(props.match.params.id);

    return {
        expense: state.find((expense) => {
            return expense.id === parseInt(props.match.params.id);
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);