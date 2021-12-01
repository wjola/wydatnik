import React, { Suspense } from "react";
import { connect } from "react-redux";
import getSelectedExpenses from "../selectors/selectExpenses";
import PageLoader from "./PageLoader";

const FiltersList = React.lazy(() => import("./FiltersList"));
const Expense = React.lazy(() => import("./Expense"));

const ExpenseList = ({ expenses }) => {
  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: getSelectedExpenses(state.expenses, state.filters),
    filters: state.FiltersList,
  };
};

export default connect(mapStateToProps)(ExpenseList);
