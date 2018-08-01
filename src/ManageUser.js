import React, { Component } from "react";
import PropTypes from "prop-types";
import { error as errorStyle } from "./styles/styles";
import { Redirect } from "react-router-dom";

class ManageUser extends Component {
  state = {
    user: {
      id: null,
      firstName: "",
      lastName: "",
      email: ""
    },
    errors: [],
    redirectToUsersPage: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.users.length > 0) {
      const userId = nextProps.match.params.id;
      const user = nextProps.users.find(u => u.id === userId);
      this.setState({ user });
    }
  }

  handleSubmit = event => {
    event.preventDefault(); // stop the page from reloading - that's the browser default.
    const errors = [];
    if (this.state.user.firstName.length === 0) {
      errors.push("First name can't be empty.");
    }
    if (this.state.user.lastName.length === 0) {
      errors.push("Last name can't be empty.");
    }

    if (errors.length === 0) {
      this.props.onAddUser(this.state.user);
      this.setState({ redirectToUsersPage: true });
    }

    this.setState({ errors });

    // Challenge: Validate that:
    // 2. that email has a @ sign
    // 3. Display error message below "Add User"
  };

  handleChange = ({ target }) => {
    const user = {
      ...this.state.user,
      [target.id]: target.value
    };
    this.setState({ user });
  };

  renderErrors() {
    return (
      <ul style={errorStyle}>
        {this.state.errors.map(error => <li key={error}>{error}</li>)}
      </ul>
    );
  }

  render() {
    const { user, errors, redirectToUsersPage } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add User</h1>
        {redirectToUsersPage && <Redirect to="/users" />}
        {errors.length > 0 && this.renderErrors(errors)}
        <p>
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            type="text"
            id="firstName"
            onChange={this.handleChange}
            value={user.firstName}
          />
        </p>

        <p>
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            type="text"
            id="lastName"
            onChange={this.handleChange}
            value={user.lastName}
          />
        </p>

        <p>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            onChange={this.handleChange}
            value={user.email}
          />
        </p>

        <input type="submit" value="Save" />
      </form>
    );
  }
}

ManageUser.propTypes = {
  users: PropTypes.array.isRequired,
  onAddUser: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

export default ManageUser;
