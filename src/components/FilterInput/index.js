import React from 'react';

import './FilterInput.css';

export default function FilterInput(props) {
  return (
    <div className="l-filter-input">
      <input
        type="text"
        className={"filter-input filter-input-txt" +
          (props.withButton ? "" : " filter-input-txt-no-btn")}
        placeholder={props.placeholder}
        value={props.keyword}
        onChange={(e) => props.action(e.target.value)}
        />
      {props.withButton &&
        <button className="filter-input filter-input-btn">
          <i className="material-icons">search</i>
        </button>
      }
    </div>
  )
}

FilterInput.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  keyword: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
  withButton: React.PropTypes.bool
}
