import React, { PropTypes as T } from 'react';

import './Section.css';

export default function Section(props) {
  const {
    children,
    id,
    label,
  } = props;

  return (
    <section className="Section">
      <label htmlFor={id} className="Section-label">{label}</label>
      <hr className="Section-separator" />
      <ul id={id} className="l-FilterCards-grid">
        {children}
      </ul>
    </section>
  )
}

Section.propTypes = {
  children: T.node.isRequired,
  id: T.string.isRequired,
  label: T.string.isRequired,
}
