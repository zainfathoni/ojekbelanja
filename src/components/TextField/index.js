import React, { PropTypes as T } from 'react';
import classnames from 'classnames';

import './TextField.css';

export default function TextField(props) {
  const {
    className,
    type,
    name,
    label,
    placeholder,
    value,
    validate,
    message,
    required,
    update,
    min,
    max,
    step,
  } = props;

  const textFieldClass = classnames(
    className,
    'TextField',
  )
  const labelClass = classnames(
    'TextField-label'
  )
  const inputClass = classnames(
    'TextField-input',
    `TextField-input-${props.display}`,
    { 'error': !validate(value) || (required && value.length === 0) }
  )

  return (
    <div className={textFieldClass}>
      <label className={labelClass} htmlFor={name}>
        {label}
        {!required &&
          <span className="TextField-label-span"> - Opsional</span>
        }
      </label>
      <input
        className={inputClass}
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => update(name, e.target.value)}
        required={required}
        min={min}
        max={max}
        step={step}
        />
      {value ?
        (!validate(value) &&
          <span className="TextField-message">{`* ${message}`}</span>)
        :
        (required &&
          <span className="TextField-message">{`* ${label} harus diisi`}</span>)
      }
    </div>
  )
}

TextField.defaultProps = {
  type: 'text',
  display: 'fullwidth',
  value: '',
  validate: () => true,
  message: '',
  required: false,
  min: 0,
  max: 100,
  step: 1,
}

TextField.propTypes = {
  type: T.string,                   // Input Type [Text, Email, Number, ...]
  display: T.oneOf([                // TextField Display
    'fullwidth',                    // Full Width
    'content',                      // Content Width
  ]),
  name: T.string.isRequired,        // Name
  label: T.string.isRequired,       // Label
  placeholder: T.string.isRequired, // Placeholder
  value: T.string,                  // Value
  update: T.func.isRequired,        // Update Function
  validate: T.func,                 // Validation Function
  message: T.string,                // Error Message
  required: T.bool,                 // is Required
  min: T.number,                    // Minimum Value for Number/Range Type
  max: T.number,                    // Maximum Value for Number/Range Type
  step: T.number,                   // Step for Range Number/Type
}
