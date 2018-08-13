import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import LoggedInUserContext from "./LoggedInUserContext";

const Nav = props => (
  <LoggedInUserContext.Consumer>
    { ({loggedInUser, logout}) => (
      <Fragment>
        <p>Hello {loggedInUser.firstName} <a href="/" onClick={logout}>Logout</a></p>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </Fragment>
    )}
  </LoggedInUserContext.Consumer>
);

export default Nav;
