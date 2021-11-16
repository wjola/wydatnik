import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import UserIcon from "../../images/user.svg";
import ChartIcon from "../../images/bar-chart.svg";
import AddIcon from "../../images/add.svg";
import ListIcon from "../../images/clipboard.svg";
import useDeviceClass from "../utils/useDeviceClass";

const Navigation = ({ isAuthenticated }) => {
  const isDesktop = useDeviceClass() === "desktop";

  return (
    isAuthenticated && (
      <nav
        className={
          isDesktop ? "nav-container--desktop" : "nav-container container"
        }
      >
        <NavLink
          to="/"
          className="nav-element"
          activeClassName="nav-element--selected"
          exact={true}
        >
          <img src={ListIcon} className="icon icon--light" />
          {isDesktop && <p className="nav-element__text">Strona główna</p>}
        </NavLink>
        <NavLink
          to="/user"
          className="nav-element"
          activeClassName="nav-element--selected"
        >
          <img src={UserIcon} className="icon icon--light" />
          {isDesktop && <p className="nav-element__text">Moje dane</p>}
        </NavLink>
        <NavLink
          to="/charts"
          className="nav-element"
          activeClassName="nav-element--selected"
        >
          <img src={ChartIcon} className="icon icon--light" />
          {isDesktop && <p className="nav-element__text">Analizuj wydatki</p>}
        </NavLink>
        <NavLink
          to="/add"
          className="nav-element"
          activeClassName="nav-element--selected"
        >
          <img src={AddIcon} className="icon icon--light" />
          {isDesktop && <p className="nav-element__text">Dodaj wydatek</p>}
        </NavLink>
      </nav>
    )
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isLoading || !!state.user.uid,
});

export default connect(mapStateToProps)(Navigation);
