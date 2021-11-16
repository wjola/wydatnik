import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { noUserFound } from "../actions/auth";

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  noUserFound,
  ...rest
}) => {
  noUserFound();

  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.user.uid,
});

const mapDispatchToProps = (dispatch) => ({
  noUserFound: () => dispatch(noUserFound()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute);
