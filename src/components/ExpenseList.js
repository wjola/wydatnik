import React from "react";
import { connect } from "react-redux";
import Expense from "./Expense";
import FiltersList from "./FiltersList";
import getSelectedExpenses from "../selectors/selectExpenses";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list-container container">
      <FiltersList />
      <h3 className="expense-list__header">Ostatnie wydatki:</h3>
      {expenses.map((expense) => {
        return (
          <Expense
            id={expense.id}
            key={expense.id}
            amount={expense.amount}
            category={expense.category}
            date={expense.date}
            details={expense.details}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: getSelectedExpenses(state.expenses, state.filters),
    filters: state.FiltersList,
  };
};

export default connect(mapStateToProps)(ExpenseList);
