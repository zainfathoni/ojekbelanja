import React, { PropTypes as T } from 'react';

import './Form.css';

export default function Form(props) {
  const {
    title,
    icon,
    children,
    footer,
  } = props;

  return (
    <section className="Form">
      <header className="Form-header">
        <div className="Form-header-title">
          {icon}
          {` ${title}`}
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
    </section>
  )
}

Form.propTypes = {
  title: T.string.isRequired,
  icon: T.element.isRequired,
  children: T.node,
  footer: T.node,
}
