import React from "react";
import { PropTypes as T } from "prop-types";
import classnames from "classnames";

import "./Form.css";

export default function Form({
  name,
  title,
  icon,
  onSubmit,
  header,
  children,
  footer
}) {
  return (
    <form className="Form" name={name} onSubmit={onSubmit}>
      <header className="Form-header">
        <div className="Form-header-title">
          <i
            className={classnames("fa", "fa-lg", `fa-${icon}`)}
            aria-hidden="true"
          />
          {` ${title}`}
        </div>
        <div className="Form-header-action">{header}</div>
      </header>
      <main className="Form-body">{children}</main>
      {footer && <footer className="Form-footer">{footer}</footer>}
    </form>
  );
}

Form.propTypes = {
  name: T.string.isRequired,
  title: T.string.isRequired,
  icon: T.string.isRequired,
  onSubmit: T.func,
  header: T.node,
  children: T.node,
  footer: T.node
};
