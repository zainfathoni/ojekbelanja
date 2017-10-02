import React from "react";
import { PropTypes as T } from "prop-types";

import "./DescriptionList.css";

const DescriptionList = ({ children }) => (
  <dl className="DescriptionList">{children}</dl>
);

DescriptionList.propTypes = {
  children: T.node
};

export default DescriptionList;
