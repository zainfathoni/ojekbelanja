import React, { PropTypes as T } from 'react';

import Button from '../Button';
import './FilterInput.css';

export default function FilterInput(props) {
  const searchIcon = <i className="fa fa-search" aria-hidden="true"></i>;

  if (props.withButton) {
    return (
      <form className="l-FilterInput" onSubmit={(e) => {
        e.preventDefault()
        props.action(props.tempKeyword)
      } }>
        <input
          type="text"
          className="FilterInput FilterInput-txt"
          placeholder={props.placeholder}
          value={props.tempKeyword}
          onChange={(e) => props.actionTemp(e.target.value)}
          />
        <Button
          className="FilterInput FilterInput-btn"
          display="icon"
          type="submit"
          icon="search"
          text="Cari"
          isSmall
          />
      </form>
    )
  } else {
    return (
      <div className="l-FilterInput l-FilterInput-no-btn">
        <input
          type="text"
          className="FilterInput FilterInput-txt FilterInput-txt-no-btn"
          placeholder={props.placeholder}
          value={props.keyword}
          onChange={(e) => props.action(e.target.value)}
          />
        <span className="FilterInput-txt-search-icon">
          {searchIcon}
        </span>
      </div>
    )
  }
}


FilterInput.propTypes = {
  placeholder: T.string.isRequired,
  keyword: T.string.isRequired,
  action: T.func.isRequired,
  withButton: T.bool,
  actionTemp: T.func,
}
