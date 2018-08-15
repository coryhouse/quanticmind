import React, { Fragment } from "react";
import Users from "./Users";
import Nav from "./Nav";
import Home from "./Home";
import ManageUser from "./ManageUser";
import PageNotFound from "./PageNotFound";
import { Route, Switch } from "react-router-dom";

// Move this to a separate file and import it here.
class App extends React.Component {
  // handleSaveUser = user => {
  //   let users;
  //   if (!user.id) {
  //     // In a real app, I'd call an api to save the user here,
  //     // and get back a user object with an ID assigned.
  //     const savedUser = { ...user, id: this.guid() };

  //     // Add the passed user to the array of users in state.
  //     users = [...this.state.users, savedUser];
  //   } else {
  //     // Replace the user that was just edited.
  //     users = this.state.users.map(u => (u.id === user.id ? user : u));
  //   }

  //   this.setState({ users });
  // };

  // handleDeleteClick = event => {
  //   const userId = event.target.name;
  //   const users = this.state.users.filter(user => user.id !== userId);
  //   this.setState({ users });
  // };

  // guid() {
  //   function s4() {
  //     return Math.floor((1 + Math.random()) * 0x10000)
  //       .toString(16)
  //       .substring(1);
  //   }
  //   return (
  //     s4() +
  //     s4() +
  //     "-" +
  //     s4() +
  //     "-" +
  //     s4() +
  //     "-" +
  //     s4() +
  //     "-" +
  //     s4() +
  //     s4() +
  //     s4()
  //   );
  // }

  render() {
    return (
      <Fragment>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route
            path="/user"
            exact
            render={({ match }) => (
              <ManageUser onSaveUser={this.handleSaveUser} match={match} />
            )}
          />
          <Route
            path="/user/:id"
            render={({ match }) => (
              <ManageUser onSaveUser={this.handleSaveUser} match={match} />
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
      </Fragment>
    );
  }
}

export default App;
