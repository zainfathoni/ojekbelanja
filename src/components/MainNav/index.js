import React, { Component } from 'react';
import { Link } from 'react-router';

import './MainNav.css';

export default class MainNav extends Component {
  render() {
    return (
      <div className="l-mainnav">
      <div className="logoNew"><Link to="/" className="mainnav-home">Ojek <i className="material-icons">motorcycle</i><i className="material-icons">shopping_basket</i> Belanja</Link></div>
        <input id="menu-toggle" type="checkbox" />
        <label htmlFor="menu-toggle" className="label-toggle" />
        <nav className="mainnav">
          <Link to="/" className="logo mainnav-item"></Link>
          <Link to="/" className="mainnav-item mainnav-home">Ojek <i className="material-icons">motorcycle</i><i className="material-icons">shopping_basket</i> Belanja</Link>
          <Link to="/cara-kerja" className="mainnav-item" activeClassName="is-mainnav-active">Cara Kerja</Link>
          <Link to="/faq" className="mainnav-item" activeClassName="is-mainnav-active">FAQ</Link>
          <Link to="/tentang-kami" className="mainnav-item" activeClassName="is-mainnav-active">Tentang Kami</Link>
          <Link to="/styleguide" className="mainnav-item" activeClassName="is-mainnav-active">Style Guide</Link>
          <Link to="/login" className="mainnav-item mainnav-login" activeClassName="is-mainnav-active"><i className="material-icons">exit_to_app</i> Login</Link>
        </nav>
      </div>
    );
  }
}
