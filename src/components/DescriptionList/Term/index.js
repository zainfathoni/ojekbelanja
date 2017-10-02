import React from "react";
import { PropTypes as T } from "prop-types";

const Term = ({ children }) => <dt>{children}</dt>;

Term.propTypes = {
  children: T.string.isRequired
};

export default Term;
