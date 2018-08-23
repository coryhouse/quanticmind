import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { userType } from "./propTypes";
import { connect } from "react-redux";
import * as userActions from "./actions/userActions";
import { bindActionCreators } from "redux";

class Users extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(userType).isRequired
  };

  handleDeleteUserSuccess = () => {
    alert("Deleted!");
  };

  handleDeleteUserFailure = () => {
    alert("Oops! Delete failed!");
  };

  renderUserTable({ users, onDeleteClick }) {
    return (
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.email}>
                <td>
                  <button
                    name={user.id}
                    onClick={() =>
                      this.props.actions.deleteUser(
                        user.id,
                        this.handleDeleteUserSuccess,
                        this.handleDeleteUserFailure
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
                {/* Click on firstName and redirect to /user/id */}
                <td>
                  <Link to={`/user/${user.id}`}>{user.firstName}</Link>
                </td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <Fragment>
        <h1>Users</h1>
        <Link to="/user">
          <button>Add User</button>
        </Link>
        {this.props.users.length > 0 ? (
          this.renderUserTable(this.props)
        ) : (
          <h2>No users. :(</h2>
        )}
        {this.props.errors.length > 0 && <p>{this.props.errors[0].message}</p>}
      </Fragment>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
    errors: state.errors
  };
}

// Declare the actions that we want from Redux
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
