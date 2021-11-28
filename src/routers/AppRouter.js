import React, { useEffect } from "react";
import { Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import MainPage from "../components/MainPage";
import SignInPage from "../components/SignInPage";
import SignUpPage from "../components/SignUpPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpense from "../components/AddExpense";
import FiltersPage from "../components/FiltersPage";
import HomePage from "../components/HomePage";
import ChartsPage from "../components/ChartsPage";
import UserPage from "../components/UserPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import useDeviceClass from "../utils/useDeviceClass";
import { auth } from "../firebase/firebase";
import { signIn, userLoading } from "../actions/auth";
import { setExpensesAsync } from "../actions/expenses";

export const history = createBrowserHistory();

const AppRouter = ({ signIn, setExpenses }) => {
  const isDesktop = useDeviceClass() === "desktop";

  useEffect(() => {
    // noUserFound();
  }, []);

  auth.onAuthStateChanged(async (result) => {
    if (result) {
      await signIn(result.providerData[0]);
      setExpenses();
    }
  });

  return (
    <Router history={history}>
      <Header />
      <Switch>
        <PrivateRoute path="/" component={MainPage} exact={true} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute path="/add" component={AddExpense} />
        <PrivateRoute path="/filters" component={FiltersPage} />
        <PublicRoute path="/signin" component={SignInPage} />
        <PublicRoute path="/signup" component={SignUpPage} />
        <PublicRoute path="/home" component={HomePage} />
        <PrivateRoute path="/charts" component={ChartsPage} />
        <PrivateRoute path="/user" component={UserPage} />
      </Switch>
      {!isDesktop && <Navigation />}
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (userData) => dispatch(signIn(userData)),
  setExpenses: () => dispatch(setExpensesAsync()),
});

export default connect(undefined, mapDispatchToProps)(AppRouter);
