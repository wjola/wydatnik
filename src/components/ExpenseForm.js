import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SingleDatePicker } from "react-dates";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { addExpenseAsync, editExpenseAsync } from "../actions/expenses";

const ExpenseForm = ({ expense = {}, addExpense, editExpense }) => {
  const isExpenseEdited = !(Object.keys(expense).length === 0);

  const [amount, setAmount] = useState(expense.amount || "");
  const [date, setDate] = useState(
    expense.date || moment().format("D/MM/YYYY")
  );
  const [category, setCategory] = useState(expense.category || "groceries");
  const [details, setDetails] = useState(expense.details || "");
  const [calendarFocused, setCalendarFocused] = useState(false);
  const history = useHistory();

  const onClick = (e) => {
    e.preventDefault();

    const expenseFromForm = {
      amount: parseFloat(amount),
      date,
      category,
      details,
    };

    if (isAmountValid()) {
      if (isExpenseEdited) {
        editExpense(expense.id, expenseFromForm);
        history.push("/");
      } else {
        addExpense(expenseFromForm);
      }

      clearForm();
      history.push("/");
    }
  };

  const onAmountChange = (amount) => {
    const regexp = /^([1-9]\d*(\.)?\d?\d?)|([1-9]\d*)$/;

    if (amount.toString().match(regexp)) {
      setAmount(amount);
    }
  };

  const isAmountValid = () => {
    const regexp = /^([1-9]\d*((\.|\,)\d\d?)?)|(0(\.|\,)\d\d?)$/;

    return amount.toString().match(regexp);
  };

  const clearForm = () => {
    setAmount("");
    setCategory("groceries");
    setDetails("");
    setDate(moment());
  };

  const handleCancelForm = () => {
    clearForm();
    history.push("/");
  };

  return (
    <form>
      <fieldset className="form-element">
        <label htmlFor="amount">Podaj kwotę</label>
        <input
          className="input filters__input"
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          autoFocus
          required
        />
      </fieldset>
      <fieldset className="form-element">
        <label htmlFor="date">Wybierz datę</label>
        {
          <SingleDatePicker
            date={moment(date, "D/MM/YYYY")}
            onDateChange={(date) => setDate(date.format("D/MM/YYYY"))}
            focused={calendarFocused}
            onFocusChange={({ focused }) => setCalendarFocused(focused)}
            id={uuidv4()}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        }
      </fieldset>
      <fieldset className="form-element">
        <label htmlFor="category">Wybierz kategorię</label>
        <select
          className="input filters__input"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="groceries">spożywcze</option>
          <option value="drugstore">chemia</option>
          <option value="gifts">prezenty</option>
          <option value="goouts">wyjścia</option>
          <option value="alcohol">alkohol</option>
          <option value="home">domowe</option>
        </select>
      </fieldset>
      <fieldset className="form-element">
        <label htmlFor="details">Dodaj komentarz</label>
        <textarea
          className="form-element__details input"
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={6}
          maxLength={150}
        />
      </fieldset>
      <div className="filters__button-container">
        <button
          className="button button--dark filter-button"
          onClick={handleCancelForm}
        >
          Anuluj
        </button>
        <button className="button button--full filter-button" onClick={onClick}>
          {isExpenseEdited ? `Zapisz` : `Dodaj`}
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenseAsync(expense)),
  editExpense: (id, updates) => dispatch(editExpenseAsync(id, updates)),
});

export default connect(undefined, mapDispatchToProps)(ExpenseForm);
