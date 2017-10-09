import React, { Component } from "react";
import { PropTypes as T } from "prop-types";
import classnames from "classnames";

import "./Option.css";

export default function Option(props) {
  const {
    children,
    name,
    values,
    selectedValue,
    vertical,
    required,
    onChange
  } = props;

  const itemClass = classnames("Option-item", { "Option-vertical": vertical });
  const valueClass = classnames("Option-value");

  return (
    <div id={name} className="Option">
      <label className="Option-label" htmlFor={name}>
        {children}
        {!required && (
          <span className="Option-label-optional"> - Opsional</span>
        )}
      </label>
      {Object.keys(values).map(key => (
        <div key={key} className={itemClass}>
          <input
            className="Option-input"
            type="radio"
            id={`${name}_${key}`}
            name={name}
            value={key}
            checked={selectedValue === key}
            onChange={e => onChange(name, e.target.value)}
          />
          <label className={valueClass} htmlFor={`${name}_${key}`}>
            {values[key]}
          </label>
        </div>
      ))}
    </div>
  );
}

Option.propTypes = {
  name: T.string.isRequired, // Name
  values: T.object.isRequired, // Label-Value pairs
  selectedValue: T.string, // Selected Value
  vertical: T.bool, // Vertical Direction
  required: T.bool, // is Required
  onChange: T.func.isRequired // onChange Function
};
