import React, { Component } from "react";
import { PropTypes as T } from "prop-types";

import Button from "../Button";
import "./FilterInput.css";

export default class FilterInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempKeyword: this.props.keyword
    };
  }

  /*** Methods ***/

  onChange = tempKeyword => {
    this.setState({
      tempKeyword
    });
  };

  /*** Render ***/

  render() {
    const { props, state, onChange } = this;
    const searchIcon = <i className="fa fa-search" aria-hidden="true" />;

    if (props.withButton) {
      return (
        <form
          className="l-FilterInput"
          onSubmit={e => {
            e.preventDefault();
            props.setKeyword(state.tempKeyword);
          }}
        >
          <input
            type="search"
            className="FilterInput FilterInput-txt"
            placeholder={props.placeholder}
            value={state.tempKeyword}
            onChange={e => onChange(e.target.value)}
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
      );
    } else {
      return (
        <div className="l-FilterInput l-FilterInput-no-btn">
          <input
            type="search"
            className="FilterInput FilterInput-txt FilterInput-txt-no-btn"
            placeholder={props.placeholder}
            value={props.keyword}
            onChange={e => props.setKeyword(e.target.value)}
          />
          {props.keyword.length === 0 &&
            <span className="FilterInput-txt-search-icon">
              {searchIcon}
            </span>}
        </div>
      );
    }
  }
}

FilterInput.propTypes = {
  placeholder: T.string.isRequired,
  keyword: T.string.isRequired,
  setKeyword: T.func.isRequired,
  withButton: T.bool
};
