import React, { PropTypes as T } from 'react';

import './Button.css';

export default function Button(props) {
  return (
    <button className="Button" onClick={props.action}>
      <i className={`fa fa-lg fa-${props.icon}`} aria-hidden="true"></i>
      {` ${props.text}`}
    </button>
  )
}

Button.defaultProps = {
  type: 'fullwidth',
  icon: 'font-awesome',
  text: 'Button'
}

Button.propTypes = {
  type: T.oneOf([ // Button Type
    'fullwidth',
    'large',
    'small',
    'icon'
  ]).isRequired,
  action: T.func.isRequired, // Action Function
  icon: T.string, // Icon ID in Font Awesome
  text: T.string // Button Text
}
