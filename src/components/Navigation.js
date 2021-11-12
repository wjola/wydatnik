import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import UserIcon from "../../images/user.svg";
import ChartIcon from "../../images/bar-chart.svg";
import AddIcon from "../../images/add.svg";

const Navigation = ({ isAuthenticated }) => {
  return (
    isAuthenticated && (
      <nav className="nav-container container">
        <NavLink to="/user" className="nav-element">
          <img src={UserIcon} className="icon icon--light" />
        </NavLink>
        <NavLink to="/charts" className="nav-element">
          <img src={ChartIcon} className="icon icon--light" />
        </NavLink>
        <NavLink to="/add" className="nav-element">
          <img src={AddIcon} className="icon icon--light" />
        </NavLink>
      </nav>
    )
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.user & (Object.keys(state.user).length > 0),
});

export default connect(mapStateToProps)(Navigation);
