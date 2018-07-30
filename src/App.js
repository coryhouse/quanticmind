import React, { Fragment } from "react";
import Users from "./Users";
import Nav from "./Nav";
import Home from "./Home";
import { Route } from "react-router-dom";

// Move this to a separate file and import it here.
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/users" component={Users} />
      </Fragment>
    );
  }
}

export default App;
