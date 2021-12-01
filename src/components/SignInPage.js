import React, { useState, Suspense } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PigLogo from "../../images/piggy-bank-no-outline.svg";
import GoogleLogo from "../../images/google.svg";
import { signInGoogleAsync, signInPasswordAsync } from "../actions/auth";
import PageLoader from "./PageLoader";

const SignInput = React.lazy(() => import("./SignInput"));

const SignInPage = ({ signIn, signInByGoogle }) => {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Suspense fallback={<PageLoader />}>
      <div className="login__body">
        <img src={PigLogo} className="logo__pig logo__pig--medium" />
        <form className="login__form">
          <h2 className="login__header">Logowanie</h2>
          <SignInput
            id="login"
            setValueFromInput={setLogin}
            label="Login"
            value={login}
          />
          <SignInput
            password
            id="password"
            setValueFromInput={setPassword}
            label="Hasło"
            value={password}
          />
          <div className="button-container">
            <button
              className="button button--light login__button"
              onClick={(e) => {
                e.preventDefault();
                signIn(login, password);
              }}
            >
              Zaloguj
            </button>
            <button
              className="button button--light login__button"
              onClick={(e) => {
                e.preventDefault();
                history.push("/");
              }}
            >
              Wróć
            </button>
            <button
              className="button button--light button--light--full login__button login__button--google"
              onClick={(e) => {
                e.preventDefault();
                signInByGoogle();
              }}
            >
              <img src={GoogleLogo} className="icon icon--google" />
              Zaloguj przez Google
            </button>
          </div>
        </form>
      </div>
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInByGoogle: () => dispatch(signInGoogleAsync()),
  signIn: (login, password) => dispatch(signInPasswordAsync(login, password)),
});

export default connect(undefined, mapDispatchToProps)(SignInPage);
