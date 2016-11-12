import React, { PropTypes as T } from 'react';

import './Button.css';

export default function Button(props) {
  return (
    <button className={props.className} onClick={props.action}>
      <i className={`fa fa-lg ${props.icon}`} aria-hidden="true"></i>
      {` ${props.text}`}
    </button>
  )
}

Button.defaultProps = {
  type: 'fullwidth'
}

Button.propTypes = {
  type: T.oneOf([ // Button Type
    'fullwidth',
    'large',
    'small',
    'icon'
  ]).isRequired,
  action: T.func.isRequired, // Action Function
  icon: T.string, // String for Font Awesome icon identifier
  text: T.string, // Button Text
  className: T.string // className to be passed to button element
}
