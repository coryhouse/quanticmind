import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as loggedInUserActions from "./actions/loggedInUserActions";
import { bindActionCreators } from "redux";

const Nav = ({ loggedInUser, actions }) => (
  <Fragment>
    {loggedInUser && (
      <p>
        Hello {loggedInUser.firstName}{" "}
        <button onClick={actions.logout}>Logout</button>
      </p>
    )}
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
    </ul>
  </Fragment>
);

// Declare the state that you want from the Redux store
function mapStateToProps(state, ownProps) {
  return {
    loggedInUser: state.loggedInUser
  };
}

// Declare the actions that we want from Redux
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loggedInUserActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
