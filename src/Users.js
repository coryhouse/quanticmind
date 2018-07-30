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
    fetch("http://www.mocky.io/v2/5b5f6f5c2e00007d00694951")
      .then(response => response.json())
      .then(users => {
        this.setState({ users });
      });
  }

  render() {
    return (
      <Fragment>
        <h1>Users</h1>
        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            {this.state.users.map(user => {
              return (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default Users;
