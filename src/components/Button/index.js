import React, { PropTypes as T } from 'react';
import classNames from 'classnames';

import './Button.css';

export default function Button(props) {
  const buttonClass = classNames(
    'Button',
    `Button-${props.type}`,
    {
      'Button-small': props.isSmall,
      'Button-secondary': props.isSecondary
    },
    props.addClass
  )
  const iconClass = classNames(
    'fa',
    `fa-${props.icon}`,
    { 'fa-lg': !props.isSmall }
  )
  const isIcon = props.type === 'icon';

  return (
    <button className={buttonClass} onClick={props.action}>
      <i className={iconClass} title={isIcon && props.text} aria-hidden="true"></i>
      {!isIcon && ` ${props.text}`}
    </button>
  )
}

Button.defaultProps = {
  type: 'fullwidth',
  size: 'large',
  icon: 'font-awesome',
  text: 'Button'
}

Button.propTypes = {
  type: T.oneOf([ // Button Type
    'fullwidth',  // Full Width
    'content',    // Content Width
    'icon'        // Icon Only
  ]).isRequired,
  action: T.func.isRequired,  // Action Function
  icon: T.string.isRequired,  // Icon ID in Font Awesome
  text: T.string.isRequired,  // Button Text
  isSmall: T.bool,            // Size: Large (default) vs Small
  isSecondary: T.bool,        // Role: Primary (default) vs Secondary
  addClass: T.string          // Additional classNames (if any)
}
