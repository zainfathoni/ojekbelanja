import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component {
  render() {
    if (!this.props.is404) {
      return (
        <header>
          <h1>Ojek <i className="material-icons">motorcycle</i><i className="material-icons">shopping_basket</i> Belanja</h1>
          <h3>Asisten Belanja Anda</h3>
        </header>
      )
    } else {
      return (
        <header>
          <h1>Ojek <i className="material-icons">motorcycle</i><i className="material-icons">loop</i> Nyasar</h1>
          <h3 className="header-is-error">404 | Page Not Found</h3>
        </header>
      )
    }

  }
}

Header.propTypes = {
  is404: React.PropTypes.bool
}
