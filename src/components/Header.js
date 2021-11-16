import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PigLogo from "../../images/piggy-bank-no-outline.svg";
import Navigation from "./Navigation";

const Header = ({ isAuthenticated }) => {
  return isAuthenticated ? (
    <div className="header-container">
      <header className="header">
        <NavLink to="/" className="header__logo">
          <img src={PigLogo} className="logo__pig logo__pig--small" />
          <h1 className="title">Kosztopis</h1>
        </NavLink>
        <Navigation />
      </header>
    </div>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isLoading || !!state.user.uid,
});

export default connect(mapStateToProps)(Header);
