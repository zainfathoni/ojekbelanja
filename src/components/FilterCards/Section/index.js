import React from 'react';
import { PropTypes as T } from 'prop-types';
import classnames from 'classnames';

import './Section.css';

export default function Section(props) {
  const {
    children,
    id,
    label,
  } = props;

  return (
    <section
      className={
        classnames(
          'Section',
          props.className
        )
      }>
      <label
        htmlFor={id}
        className={
          classnames(
            'Section-label',
            props.labelClassName
          )
        }>
        {label}
      </label>
      <hr
        className={
          classnames(
            'Section-separator',
            props.separatorClassName
          )
        } />
      {children}
    </section>
  )
}

Section.propTypes = {
  children: T.node.isRequired,
  id: T.string.isRequired,
  label: T.string.isRequired,
  labelClassName: T.string,
  separatorClassName: T.string,
}
