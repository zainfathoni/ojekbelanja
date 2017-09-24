import React from "react";
import { PropTypes as T } from "prop-types";

import "./DescriptionList.css";

const DescriptionList = ({ list }) => (
  <dl className="DescriptionList">
    {list.map(item => (
      <div key={item.term}>
        <dt>{item.term}</dt>
        <dd>{item.definition || "-"}</dd>
      </div>
    ))}
  </dl>
);

DescriptionList.propTypes = {
  list: T.arrayOf(
    T.shape({
      term: T.string.isRequired,
      definition: T.string
    })
  ).isRequired
};

export default DescriptionList;
