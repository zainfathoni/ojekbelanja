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

  onFocus = (name, value) => {
    this.setState({
      isFocused: true // Set Focused
    });
  };

  onBlur = (name, value) => {
    this.setState({
      isPristine: false, // Set Dirty
      isFocused: false // Set Blur
    });
    if (this.props.onBlur) {
      this.props.onBlur(name, value); // Call onBlur props function
    }
  };

  isInvalid = () =>
    !this.state.isPristine &&
    !this.state.isFocused &&
    this.props.value &&
    this.props.validate &&
    !this.props.validate(this.props.value);

  isRequired = () =>
    !this.state.isPristine &&
    !this.state.isFocused &&
    !this.props.value &&
    this.props.required;

  /*** Render ***/

  render() {
    const {
      className,
      display,
      name,
      label,
      placeholder,
      value,
      message,
      required,
      onChange,
      rows
    } = this.props;

    const TextAreaClass = classnames(className, "TextArea");
    const labelClass = classnames("TextArea-label");
    const inputClass = classnames(
      "TextArea-input",
      `TextArea-input-${display}`,
      {
        "TextArea-input-is-error": this.isInvalid() || this.isRequired()
      }
    );

    return (
      <div className={TextAreaClass}>
        {label && (
          <label className={labelClass} htmlFor={name}>
            {label}
            {!required && (
              <span className="TextArea-label-span"> - Opsional</span>
            )}
          </label>
        )}
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
        {this.isInvalid() ? (
          <span className="TextField-message">{`* ${message}`}</span>
        ) : (
          this.isRequired() && (
            <span className="TextField-message">{`* ${label} harus diisi`}</span>
          )
        )}
      </div>
    );
  }
}

TextArea.defaultProps = {
  display: "fullwidth",
  value: "",
  message: "",
  rows: 3
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
  onChange: T.func.isRequired, // onChange Function
  onBlur: T.func, // onBlur Function
  validate: T.func, // Validation Function
  message: T.string, // Error Message
  required: T.bool, // is Required
  rows: T.number // Number of Rows
};
