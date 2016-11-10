import React from 'react';

import './FilterInput.css';

export default function FilterInput(props) {
  const searchIcon = <i className="material-icons">search</i>;

  // TODO: @rekysenjaya If withButton, search will be done onClick instead of onChange
  if(props.withButton){
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        props.action(props.tempKeyword)
      }}>
      <div className="l-filter-input">
      <input
      type="text"
      className="filter-input filter-input-txt"
      placeholder={props.placeholder}
      value={props.tempKeyword}
      onChange={(e) => props.updateTempKeyword(e.target.value)}
      />
      <button type="submit" className="filter-input filter-input-btn">
      {searchIcon}
      </button>
      </div>
      </form>
    )
  }else{
    return (
      <div className="l-filter-input l-filter-input-no-btn">
      <input
      type="text"
      className="filter-input filter-input-txt filter-input-txt-no-btn"
      placeholder={props.placeholder}
      value={props.keyword}
      onChange={(e) => props.action(e.target.value)}
      />
      <span className="filter-input-txt-search-icon">
      {searchIcon}
      </span>
      </div>
    )
  }
}


FilterInput.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  keyword: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired,
  withButton: React.PropTypes.bool
}
