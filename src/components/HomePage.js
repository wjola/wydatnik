import React from "react";
import { useHistory } from "react-router";
import PigLogo from "../../images/piggy-bank-no-outline.svg";

const HomePage = () => {
  const history = useHistory();

  const onSigningInClick = (e) => {
    e.preventDefault();

    history.push("/signin");
  };

  const onSigningUpClick = (e) => {
    e.preventDefault();

    history.push("/signup");
  };

  return (
    <div className="home__page">
      <div className="home__container">
        <img src={PigLogo} className="logo__pig" />
        <div className="home__container__buttons">
          <h2 className="home__header">
            Rozpocznij <span className="highlighted">Wydatnik</span>!
          </h2>
          <button
            className="button button--light--full login__button"
            onClick={onSigningInClick}
          >
            Logowanie
          </button>
          <button
            className="button button--light login__button"
            onClick={onSigningUpClick}
          >
            Rejestracja
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
