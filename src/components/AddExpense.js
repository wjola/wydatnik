import React, { Suspense } from "react";
import PageLoader from "./PageLoader";

const ExpenseForm = React.lazy(() => import("./ExpenseForm"));

const AddExpense = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="subpage__body container">
        <h2 className="subpage__header">Dodaj wydatek:</h2>
        <ExpenseForm />
      </div>
    </Suspense>
  );
};

export default AddExpense;
