import React, { Fragment } from "react";
import Users from "./Users";
import Nav from "./Nav";
import Home from "./Home";
import ManageUser from "./ManageUser";
import PageNotFound from "./PageNotFound";
import { Route, Switch } from "react-router-dom";

// Move this to a separate file and import it here.
class App extends React.Component {
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
