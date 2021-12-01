import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import useDeviceClass from "../utils/useDeviceClass";
import { auth } from "../firebase/firebase";
import { signIn } from "../actions/auth";
import { setExpensesAsync } from "../actions/expenses";
import PageLoader from "../components/PageLoader";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";

const PrivateRoute = React.lazy(() => import("./PrivateRoute"));
const PublicRoute = React.lazy(() => import("./PublicRoute"));
const HomePage = React.lazy(() => import("../components/HomePage"));
const MainPage = React.lazy(() => import("../components/MainPage"));
const SignInPage = React.lazy(() => import("../components/SignInPage"));
const SignUpPage = React.lazy(() => import("../components/SignUpPage"));
const EditExpensePage = React.lazy(() =>
  import("../components/EditExpensePage")
);
const AddExpense = React.lazy(() => import("../components/AddExpense"));
const FiltersPage = React.lazy(() => import("../components/FiltersPage"));
const ChartsPage = React.lazy(() => import("../components/ChartsPage"));
const UserPage = React.lazy(() => import("../components/UserPage"));
const Header = React.lazy(() => import("../components/Header"));
const Navigation = React.lazy(() => import("../components/Navigation"));

export const history = createBrowserHistory();

const AppRouter = ({ signIn, setExpenses }) => {
  const isDesktop = useDeviceClass() === "desktop";

  auth.onAuthStateChanged(async (result) => {
    if (result) {
      await signIn({ email: result.email, uid: result.uid });
      setExpenses();
    }
  });

  return (
    <Router history={history}>
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (userData) => dispatch(signIn(userData)),
  setExpenses: () => dispatch(setExpensesAsync()),
});

export default connect(undefined, mapDispatchToProps)(AppRouter);
