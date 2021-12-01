import React, { Suspense } from "react";
import { connect } from "react-redux";
import PageLoader from "./PageLoader";

const ExpenseForm = React.lazy(() => import("./ExpenseForm"));

const EditExpensePage = ({ expense }) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="subpage__body container">
        <h2 className="subpage__header">Edytuj dane o wydatku:</h2>
        <ExpenseForm expense={expense} />
      </div>
    </Suspense>
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
