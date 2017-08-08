import React, { Component } from "react";
import { PropTypes as T } from "prop-types";
import classnames from "classnames";

import "./TextArea.css";

export default class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPristine: true,
      isFocused: false
    };
  }

  /*** Methods ***/

  onFocus(name, value) {
    this.setState({
      isFocused: true // Set Focused
    });
  }

  onBlur(name, value) {
    if (this.props.noValidation) {
      this.props.onBlur(name, value); // Call onBlur props function
    } else {
      this.setState({
        isPristine: false, // Set Dirty
        isFocused: false // Set Blur
      });
    }
  }

  /*** Render ***/

  render() {
    const {
      className,
      display,
      name,
      label,
      placeholder,
      value,
      rows,
      validate,
      message,
      required,
      onChange
    } = this.props;
    const { isPristine, isFocused } = this.state;

    const TextAreaClass = classnames(className, "TextArea");
    const labelClass = classnames("TextArea-label");
    const inputClass = classnames(
      "TextArea-input",
      `TextArea-input-${display}`,
      {
        "TextArea-input-is-error":
          !isPristine && !isFocused && (value ? !validate(value) : required)
      }
    );

    return (
      <div className={TextAreaClass}>
        {label &&
          <label className={labelClass} htmlFor={name}>
            {label}
            {!required &&
              <span className="TextArea-label-span"> - Opsional</span>}
          </label>}
        <textarea
          className={inputClass}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          rows={rows}
          onFocus={e => this.onFocus(name, e.target.value)}
          onChange={e => onChange(name, e.target.value)}
          onBlur={e => this.onBlur(name, e.target.value)}
          required={required}
        />
        {!isPristine &&
          !isFocused &&
          (value
            ? !validate(value) /* Validation Message */ &&
              <span className="TextArea-message">{`* ${message}`}</span>
            : required /* Requiring Message */ &&
              <span className="TextArea-message">{`* ${label} harus diisi`}</span>)}
      </div>
    );
  }
}

TextArea.defaultProps = {
  display: "fullwidth",
  value: "",
  rows: 3,
  validate: () => true,
  message: ""
};

TextArea.propTypes = {
  display: T.oneOf([
    // TextArea Display
    "fullwidth", // Full Width
    "content", // Content Width
    "fixed" // Fixed Width
  ]),
  name: T.string, // Name
  label: T.string, // Label
  placeholder: T.string, // Placeholder
  value: T.any.isRequired, // Value
  rows: T.number, // Number of Rows
  onChange: T.func.isRequired, // onChange Function
  onBlur: T.func, // onBlur Function
  noValidation: T.bool, // Flag to disable Validation
  validate: T.func, // Validation Function
  message: T.string, // Error Message
  required: T.bool // is Required
};
