import React from 'react';

import './FilterInput.css';

export default function FilterInput(props) {


  const searchIcon = <i className="material-icons">search</i>;

  // TODO: @rekysenjaya If withButton, search will be done onClick instead of onChange

  return (
    <div className={"l-filter-input" +
      (props.withButton ? "" : " l-filter-input-no-btn")}>
      {props.withButton ?
        <input
          type="text"
          className={"filter-input filter-input-txt" +
            (props.withButton ? "" : " filter-input-txt-no-btn")}
          placeholder={props.placeholder}
          value={props.keyword}
          onChange={(e) => props.search(e.target.value)}
          />
          :
            <input
              type="text"
              className={"filter-input filter-input-txt" +
                (props.withButton ? "" : " filter-input-txt-no-btn")}
              placeholder={props.placeholder}
              value={props.keyword}
              onChange={(e) => props.action(e.target.value)}
              />
      }
      {props.withButton ?
        <button className="filter-input filter-input-btn" onClick={props.click}>
          {searchIcon}
        </button>
        :
        <span className="filter-input-txt-search-icon">
          {searchIcon}
        </span>
      }
    </div>
  )
}

FilterInput.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  keyword: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
  click: React.PropTypes.func,
  search: React.PropTypes.func,
  withButton: React.PropTypes.bool
}
