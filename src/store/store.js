import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import userReducer from "../reducers/auth";

export default () => {
  const middlewareEnhancer = applyMiddleware(thunk);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);

  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      user: userReducer,
    }),
    composedEnhancers
  );

  return store;
};
