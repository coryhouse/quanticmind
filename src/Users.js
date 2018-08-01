import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Users extends React.Component {
  handleDeleteClick(userId, event) {
    const users = this.state.users.filter(user => user.id !== userId);
    this.setState({ users });
  }

  renderUserTable() {
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
          {this.props.users.map(user => {
            return (
              <tr key={user.email}>
                <td>
                  <button
                    onClick={event => this.handleDeleteClick(user.id, event)}
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
          this.renderUserTable()
        ) : (
          <h2>No users. :(</h2>
        )}
      </Fragment>
    );
  }
}

export default Users;
