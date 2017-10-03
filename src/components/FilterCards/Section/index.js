import React from "react";
import { PropTypes as T } from "prop-types";
import classnames from "classnames";
import Highlighter from "react-highlight-words";

import "./Section.css";

export default function Section(props) {
  const { children, id, label, keyword } = props;

  return (
    <section className={classnames("Section", props.className)}>
      <label
        htmlFor={id}
        className={classnames("Section-label", props.labelClassName)}
      >
        {<Highlighter searchWords={[keyword]} textToHighlight={label} />}
      </label>
      <hr
        className={classnames("Section-separator", props.separatorClassName)}
      />
      {children}
    </section>
  );
}

Section.propTypes = {
  children: T.node.isRequired,
  id: T.string.isRequired,
  label: T.string.isRequired,
  keyword: T.string.isRequired,
  labelClassName: T.string,
  separatorClassName: T.string
};
