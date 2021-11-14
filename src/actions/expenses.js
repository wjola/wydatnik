import { database } from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";

export const addExpenseAsync = (expense) => {
  const id = uuidv4();

  return (dispatch, getState) => {
    const { user } = getState();

    database
      .ref(`users/${user.uid}/expenses/${id}`)
      .set({
        ...expense,
        date: expense.date,
      })
      .then(() =>
        dispatch(
          addExpense({
            ...expense,
            id,
          })
        )
      )
      .catch((e) => console.warn(e));
  };
};

const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    expense,
  };
};

export const editExpenseAsync = (id, updates) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    database
      .ref(`users/${user.uid}/expenses/${id}`)
      .update({
        ...updates,
      })
      .then(() => dispatch(editExpense(id, updates)))
      .catch((e) => console.warn(e));
  };
};

const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};

export const removeExpenseAsync = (id) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    try {
      await database.ref(`users/${user.uid}/expenses`).child(id).remove();
      dispatch(removeExpense(id));
    } catch (e) {
      console.log(e);
    }
  };
};

const removeExpense = (id) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

export const setExpensesAsync = () => {
  return async (dispatch, getState) => {
    const { user } = getState();
    console.log(user);
    try {
      const response = await database
        .ref(`users/${user.uid}/expenses`)
        .get("value");
      const expensesById = response.val();

      let expenses = [];
      for (let id in expensesById) {
        expenses.push({
          id,
          ...expensesById[id],
        });
      }

      dispatch(setExpenses(expenses));
    } catch (e) {
      console.log(e);
    }
  };
};

const setExpenses = (expenses) => {
  return {
    type: "SET_EXPENSES",
    expenses,
  };
};
