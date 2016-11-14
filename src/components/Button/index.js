import React, { PropTypes as T } from 'react';
import classNames from 'classnames';

import './Button.css';

export default function Button(props) {
  const buttonClass = classNames(
    props.className,
    'Button',
    `Button-${props.display}`,
    {
      'Button-small': props.isSmall,
      'Button-secondary': props.isSecondary
    }
  )
  const iconClass = classNames(
    'fa',
    `fa-${props.icon}`,
    { 'fa-lg': !props.isSmall }
  )
  const isIcon = props.display === 'icon';

  return (
    <button
      className={buttonClass}
      title={isIcon ? props.text : ""}
      type={props.type}
      onClick={props.action}
      disabled={props.disabled}>
      <i className={iconClass} aria-hidden="true"></i>
      {!isIcon && ` ${props.text}`}
    </button>
  )
}

Button.defaultProps = {
  display: 'fullwidth',
  size: 'large',
  icon: 'font-awesome',
  text: 'Button'
}

Button.propTypes = {
  type: T.string,     // Input Type [Submit, ...]
  display: T.oneOf([  // Button Display
    'fullwidth',      // Full Width
    'content',        // Content Width
    'icon'            // Icon Only
  ]).isRequired,
  icon: T.string.isRequired,  // Icon ID in Font Awesome
  text: T.string.isRequired,  // Button Text
  action: T.func,             // Action Function
  isSmall: T.bool,            // Size: Large (default) vs Small
  isSecondary: T.bool,        // Role: Primary (default) vs Secondary
  disabled: T.bool            // Button is disabled
}
