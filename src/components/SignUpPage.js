import React, { useState, Suspense } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PigLogo from "../../images/piggy-bank-no-outline.svg";
import { signUpAsync } from "../actions/auth";
import PageLoader from "./PageLoader";

const SignInput = React.lazy(() => import("./SignInput"));

const SignUpPage = ({ signUp }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [passwordAlert, setPasswordAlert] = useState("");
  const [passwordRepeatAlert, setPasswordRepeatAlert] = useState("");
  const [emailAlert, setEmailAlert] = useState("");

  return (
    <Suspense fallback={<PageLoader />}>
      <div className="login__body">
        <img src={PigLogo} className="logo__pig logo__pig--medium" />
        <form className="login__form">
          <h2 className="login__header">Rejestracja</h2>
          <SignInput
            id="email"
            setValueFromInput={setEmail}
            label="E-mail"
            value={email}
            alert={emailAlert}
            setAlert={setEmailAlert}
          />
          <SignInput
            password
            id="password"
            setValueFromInput={setPassword}
            label="Hasło"
            value={password}
            alert={passwordAlert}
            setAlert={setPasswordAlert}
          />
          <SignInput
            password
            id="passwordRepeat"
            setValueFromInput={setPasswordRepeat}
            label="Potwórz hasło"
            value={passwordRepeat}
            alert={passwordRepeatAlert}
            setAlert={setPasswordRepeatAlert}
          />
          <div className="button-container">
            <button
              className="button button--light login__button"
              onClick={(e) => {
                e.preventDefault();
                let correctCredentials = true;

                if (password.length >= 6) {
                  setPasswordAlert("");
                } else {
                  setPasswordAlert("Hasło powinno mieć co najmniej 6 znaków!");
                  correctCredentials = false;
                }

                if (passwordRepeat === password) {
                  setPasswordRepeatAlert("");
                } else {
                  setPasswordRepeatAlert("Hasła się różnią!");
                  correctCredentials = false;
                }

                if (email.match(/^\w+\@\w+\.\w+$/)) {
                  setEmailAlert("");
                } else {
                  setEmailAlert("Wpisz poprawnie e-mail");
                  correctCredentials = false;
                }
                if (correctCredentials) {
                  signUp(email, password);
                }
              }}
            >
              Zarejestruj
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
          </div>
        </form>
      </div>
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (email, password) => dispatch(signUpAsync(email, password)),
});

export default connect(undefined, mapDispatchToProps)(SignUpPage);
