import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = ({ expense }) => {
  return (
    <div className="subpage__body container">
      <h2 className="subpage__header">Edytuj dane o wydatku:</h2>
      <ExpenseForm expense={expense} />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
