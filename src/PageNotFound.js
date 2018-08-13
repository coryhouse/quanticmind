import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PageNotFound = ({ location, message }) => {
  return (
    <Fragment>
      <h1>Oops! {location.pathname} was not found.</h1>
      <p>
        <Link to="/">Go home</Link>
      </p>
      <p>{message}</p>
    </Fragment>
  );
};

PageNotFound.propTypes = {
  location: PropTypes.object.isRequired,
  message: PropTypes.string
};

PageNotFound.defaultProps = {
  message: "Sorry, it's likely Amit's fault."
};

export default PageNotFound;
