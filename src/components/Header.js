import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PigLogo from "../../images/piggy-bank-no-outline.svg";
import useDeviceClass from "../utils/useDeviceClass";
import DesktopNavigation from "./DesktopNavigation";

const Header = ({ isAuthenticated }) => {
  const isDesktop = useDeviceClass() === "desktop";

  return isAuthenticated ? (
    <div className="header-container">
      <header className="header">
        <NavLink to="/" className="header__logo">
          <img src={PigLogo} className="logo__pig logo__pig--small" />
          <h1 className="title">Kosztopis</h1>
        </NavLink>
        {isDesktop && <DesktopNavigation />}
      </header>
    </div>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.user & (Object.keys(state.user).length > 0),
});

export default connect(mapStateToProps)(Header);
