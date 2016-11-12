import React, { Component } from 'react';
import { Link } from 'react-router';

import './MainNav.css';

export default class MainNav extends Component {
  render() {
    return (
      <div className="l-mainnav">
        <nav className="mainnav">
          <Link to="/" className="mainnav-item mainnav-home">Ojek <i className="fa fa-motorcycle" aria-hidden="true"></i><i className="fa fa-shopping-basket" aria-hidden="true"></i> Belanja</Link>
          <Link to="/cara-kerja" className="mainnav-item" activeClassName="is-mainnav-active">Cara Kerja</Link>
          <Link to="/faq" className="mainnav-item" activeClassName="is-mainnav-active">FAQ</Link>
          <Link to="/tentang-kami" className="mainnav-item" activeClassName="is-mainnav-active">Tentang Kami</Link>
          <Link to="/styleguide" className="mainnav-item" activeClassName="is-mainnav-active">Style Guide</Link>
          <Link to="/login" className="mainnav-item mainnav-login" activeClassName="is-mainnav-active"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
        </nav>
      </div>
    );
  }
}
