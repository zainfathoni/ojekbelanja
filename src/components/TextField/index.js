import React, { Component, PropTypes as T } from 'react';
import classnames from 'classnames';

import './TextField.css';

export default class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPristine: true,
    }
  }

  /*** Methods ***/

  revalidate(name, value) {
    const {
      noValidation,
      onBlur
    } = this.props;
    if (noValidation) {
      onBlur(name, value);
    } else {
      this.setState({
        isPristine: false,
      })
    }
  }

  /*** Render ***/

  render() {
    const {
      className,
      type,
      display,
      name,
      label,
      placeholder,
      value,
      validate,
      message,
      required,
      onChange,
      min,
      max,
      step,
    } = this.props;
    const {
      isPristine,
    } = this.state

    const textFieldClass = classnames(
      className,
      'TextField',
    )
    const labelClass = classnames(
      'TextField-label'
    )
    const inputClass = classnames(
      'TextField-input',
      `TextField-input-${display}`,
      {
        'error': !isPristine &&
        (value ? !validate(value) : required)
      }
    )

    return (
      <div className={textFieldClass}>
        {label &&
          <label className={labelClass} htmlFor={name}>
            {label}
            {!required &&
              <span className="TextField-label-span"> - Opsional</span>
            }
          </label>
        }
        <input
          className={inputClass}
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={(e) => this.revalidate(name, e.target.value)}
          required={required}
          min={min}
          max={max}
          step={step}
          />
        {!isPristine &&
          (value ?
            (!validate(value) &&
              <span className="TextField-message">{`* ${message}`}</span>)
            :
            (required &&
              <span className="TextField-message">{`* ${label} harus diisi`}</span>)
          )
        }
      </div>
    )
  }
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
    'fixed',                        // Fixed Width
  ]),
  name: T.string,                   // Name
  label: T.string,                  // Label
  placeholder: T.string,            // Placeholder
  value: T.any.isRequired,          // Value
  onChange: T.func.isRequired,      // onChange Function
  onBlur: T.func,                   // onBlur Function
  noValidation: T.bool,             // Flag to disable Validation
  validate: T.func,                 // Validation Function
  message: T.string,                // Error Message
  required: T.bool,                 // is Required
  min: T.number,                    // Minimum Value for Number/Range Type
  max: T.number,                    // Maximum Value for Number/Range Type
  step: T.number,                   // Step for Range Number/Type
}
