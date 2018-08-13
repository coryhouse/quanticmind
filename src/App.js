import React, { Fragment } from "react";
import Users from "./Users";
import Nav from "./Nav";
import Home from "./Home";
import ManageUser from "./ManageUser";
import PageNotFound from "./PageNotFound";
import { Route, Switch } from "react-router-dom";
import LoggedInUserContext from "./LoggedInUserContext";

// Move this to a separate file and import it here.
class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    // make api call
    fetch("http://www.mocky.io/v2/5b61e5e6300000f10d6a43ff")
      .then(response => response.json())
      .then(users => {
        this.setState({ users });
      });
  }

  handleSaveUser = user => {
    let users;
    if (!user.id) {
      // In a real app, I'd call an api to save the user here,
      // and get back a user object with an ID assigned.
      const savedUser = { ...user, id: this.guid() };

      // Add the passed user to the array of users in state.
      users = [...this.state.users, savedUser];
    } else {
      // Replace the user that was just edited.
      users = this.state.users.map(u => (u.id === user.id ? user : u));
    }

    this.setState({ users });
  };

  handleDeleteClick = event => {
    const userId = event.target.name;
    const users = this.state.users.filter(user => user.id !== userId);
    this.setState({ users });
  };

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  }

  render() {
    const loggedInUser = {
      id: "1",
      firstName: "Cory",
      lastName: "House",
      email: "housecor@gmail.com"
    };
    return (
      <LoggedInUserContext.Provider value={loggedInUser}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/users"
            render={() => (
              <Users
                users={this.state.users}
                onDeleteClick={this.handleDeleteClick}
              />
            )}
          />
          <Route
            path="/user"
            exact
            render={({ match }) => (
              <ManageUser
                users={this.state.users}
                onSaveUser={this.handleSaveUser}
                match={match}
              />
            )}
          />
          <Route
            path="/user/:id"
            render={({ match }) => (
              <ManageUser
                users={this.state.users}
                onSaveUser={this.handleSaveUser}
                match={match}
              />
            )}
          />
          <Route
            path="*"
            render={({ location }) => (
              <PageNotFound
                location={location}
                message="It's actually Cory's fault."
              />
            )}
          />
        </Switch>
      </LoggedInUserContext.Provider>
    );
  }
}

export default App;
