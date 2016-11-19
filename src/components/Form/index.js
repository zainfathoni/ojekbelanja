import React, { PropTypes as T } from 'react';

import './Form.css';

export default function Form(props) {
  const {
    title,
    icon,
    onSubmit,
    header,
    children,
    footer,
  } = props;

  return (
    <form
      className="Form"
      onSubmit={onSubmit}>
      <header className="Form-header">
        <div className="Form-header-title">
          {icon}
          {` ${title}`}
        </div>
        <div className="Form-header-action">
          {header}
        </div>
      </header>
      <main className="Form-body">
        {children}
      </main>
      {footer &&
        <footer className="Form-footer">
          {footer}
        </footer>
      }
    </form>
  )
}

Form.propTypes = {
  title: T.string.isRequired,
  icon: T.element.isRequired,
  onSubmit: T.func.isRequired,
  header: T.node,
  children: T.node,
  footer: T.node,
}
