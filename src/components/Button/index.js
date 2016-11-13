import React, { PropTypes as T } from 'react';
import classNames from 'classnames';

import './Button.css';

export default function Button(props) {
  const {
    type,
    isPrimary
  } = props;
  const buttonClass = classNames(
    'Button',
    `Button-${type}`,
    {'Button-secondary': !isPrimary}
  )
  
  return (
    <button className={buttonClass} onClick={props.action}>
      <i className={`fa fa-lg fa-${props.icon}`} aria-hidden="true"></i>
      {` ${props.text}`}
    </button>
  )
}

Button.defaultProps = {
  type: 'fullwidth',
  icon: 'font-awesome',
  text: 'Button',
  isPrimary: true
}

Button.propTypes = {
  type: T.oneOf([ // Button Type
    'fullwidth',  // Full Width
    'large',      // Large Font, Content Width
    'small',      // Small Font
    'icon'        // Icon Only
  ]).isRequired,
  action: T.func.isRequired, // Action Function
  icon: T.string, // Icon ID in Font Awesome
  text: T.string, // Button Text
  isPrimary: T.bool // is Primary Button
}
