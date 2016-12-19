import React, { Component, PropTypes as T } from 'react';
import classnames from 'classnames';

import './Option.css';

export default class Option extends Component {
  /*** Render ***/

  render() {
    const {
      children,
      name,
      values,
      selectedValue,
      vertical,
      required,
      onChange,
    } = this.props;

    const itemClass = classnames(
      'Option-item',
      { 'Option-vertical': vertical }
    );
    const valueClass = classnames(
      'Option-value',
    );

    return (
      <div id={name} className="Option">
        <label className="Option-label" htmlFor={name}>
          {children}
          {!required &&
            <span className="Option-label-optional"> - Opsional</span>
          }
        </label>
        {Object.keys(values)
          .map(key =>
            <div key={key} className={itemClass}>
              <input
                className="Option-input"
                type="radio"
                id={`${name}_${key}`}
                name={name}
                value={key}
                checked={selectedValue === key}
                onFocus={(e) => this.onFocus(name, e.target.value)}
                onChange={(e) => onChange(name, e.target.value)}
                onSubmit={(e) => this.onBlur(name, e.target.value)}
                />
              <label
                className={valueClass}
                htmlFor={`${name}_${key}`}
                >
                {key}
              </label>
            </div>
          )
        }
      </div>
    )
  }
}

Option.propTypes = {
  name: T.string.isRequired,    // Name
  values: T.object.isRequired,  // Label-Value pairs
  selectedValue: T.string,      // Selected Value
  vertical: T.bool,             // Vertical Direction
  required: T.bool,             // is Required
  onChange: T.func.isRequired,  // onChange Function
}
