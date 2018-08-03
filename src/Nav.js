import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/users">Users</NavLink>
    </li>
  </ul>
);

export default Nav;
