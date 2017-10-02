import React from "react";
import { PropTypes as T } from "prop-types";

const Description = ({ children }) => <dd>{children || "-"}</dd>;

Description.propTypes = {
  children: T.string
};

export default Description;
