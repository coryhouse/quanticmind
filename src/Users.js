import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Users extends React.Component {
  static propTypes = {
    onDeleteClick: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

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
                  <button onClick={event => onDeleteClick(user.id, event)}>
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
      </Fragment>
    );
  }
}

export default Users;
