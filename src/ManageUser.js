import React, { Component } from "react";

class ManageUser extends Component {
  state = {
    user: {
      id: null,
      firstName: "",
      lastName: "",
      email: ""
    },
    errors: []
  };

  handleSubmit = event => {
    event.preventDefault(); // stop the page from reloading - that's the browser default.
    const errors = [];
    if (this.state.user.firstName.length === 0) {
      errors.push("First name can't be empty.");
    }
    if (this.state.user.lastName.length === 0) {
      errors.push("Last name can't be empty.");
    }

    this.setState({ errors });
    // Challenge: Validate that:
    // 1. names aren't empty
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
    return <ul>{this.state.errors.map(error => <li>{error}</li>)}</ul>;
  }

  render() {
    const { user, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add User</h1>
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

export default ManageUser;
