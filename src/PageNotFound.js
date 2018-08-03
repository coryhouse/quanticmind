import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PageNotFound = ({ location }) => {
  return (
    <Fragment>
      <h1>Oops! {location.pathname} was not found.</h1>
      <p>
        <Link to="/">Go home</Link>
      </p>
    </Fragment>
  );
};

PageNotFound.propTypes = {
  location: PropTypes.object.isRequired
};

export default PageNotFound;
