import React from "react";
import ExpenseForm from "./ExpenseForm";

const AddExpense = () => {
  return (
    <div className="subpage__body container">
      <h2 className="subpage__header">Dodaj wydatek:</h2>
      <ExpenseForm />
    </div>
  );
};

export default AddExpense;
