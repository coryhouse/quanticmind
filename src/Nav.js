import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import LoggedInUserContext from "./LoggedInUserContext";

const Nav = props => (
  <LoggedInUserContext.Consumer>
    {loggedInUser => (
      <Fragment>
        <p>Hello {loggedInUser.firstName}</p>
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
