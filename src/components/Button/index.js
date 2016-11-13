import React, { PropTypes as T } from 'react';
import classNames from 'classnames';

import './Button.css';

export default function Button(props) {
  const {
    type
  } = props;
  const buttonClass = classNames(
    'Button',
    `Button-${type}`
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
  text: 'Button'
}

Button.propTypes = {
  type: T.oneOf([
    'fullwidth',
    'large',
    'small',
    'icon'
  ]).isRequired, // Button Type
  action: T.func.isRequired, // Action Function
  icon: T.string, // Icon ID in Font Awesome
  text: T.string // Button Text
}
