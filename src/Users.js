import React, { Fragment } from "react";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // make api call
    fetch("http://www.mocky.io/v2/5b607ffa2f00007a004619a2")
      .then(response => response.json())
      .then(users => {
        this.setState({ users });
      });
  }

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
          {this.state.users.map(user => {
            return (
              <tr key={user.email}>
                <td>
                  <button
                    onClick={event => this.handleDeleteClick(user.id, event)}
                  >
                    Delete
                  </button>
                </td>
                <td>{user.firstName}</td>
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
        <button>Add User</button>
        {this.state.users.length > 0 ? (
          this.renderUserTable()
        ) : (
          <h2>No users. :(</h2>
        )}
      </Fragment>
    );
  }
}

export default Users;
