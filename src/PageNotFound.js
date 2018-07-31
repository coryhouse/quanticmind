import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class PageNotFound extends Component {
  render() {
    return (
      <Fragment>
        <h1>Oops! Page not found.</h1>
        <p>
          <Link to="/">Go home</Link>
        </p>
      </Fragment>
    );
  }
}

export default PageNotFound;
