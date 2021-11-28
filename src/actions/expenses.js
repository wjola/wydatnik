import { database } from "../firebase/firebase";
import { ref, child, get, set, update, remove } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

export const addExpenseAsync = (expense) => {
  const id = uuidv4();

  return async (dispatch, getState) => {
    const { user } = getState();
    try {
      await set(ref(database, `users/${user.uid}/expenses/${id}`), {
        ...expense,
        date: expense.date,
      });

      dispatch(
        addExpense({
          ...expense,
          id,
        })
      );
    } catch (e) {
      console.warn(e);
    }
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

    try {
      const dbRef = ref(database);
      await update(child(dbRef, `users/${user.uid}/expenses/${id}`), {
        ...updates,
      });
      dispatch(editExpense(id, updates));
    } catch (e) {
      console.warn(e);
    }
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
      const dbRef = ref(database);
      await remove(child(dbRef, `users/${user.uid}/expenses/${id}`));

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
    let expensesById = [];

    try {
      const dbRef = ref(database);
      await get(child(dbRef, `users/${user.uid}/expenses`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            expensesById = snapshot.val();
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

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
