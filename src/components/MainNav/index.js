import React, { Component } from 'react';
import { Link } from 'react-router';

import './MainNav.css';

export default class MainNav extends Component {
  render() {
    return (
      <div className="l-MainNav">
        <nav className="MainNav">
          <Link to="/" className="MainNav-item MainNav-home">Ojek <i className="fa fa-motorcycle" aria-hidden="true"></i><i className="fa fa-shopping-cart" aria-hidden="true"></i> Belanja</Link>
          <Link to="/cara-kerja" className="MainNav-item" activeClassName="MainNav-is-active">Cara Kerja</Link>
          <Link to="/faq" className="MainNav-item" activeClassName="MainNav-is-active">FAQ</Link>
          <Link to="/tentang-kami" className="MainNav-item" activeClassName="MainNav-is-active">Tentang Kami</Link>
          <Link to="/styleguide" className="MainNav-item" activeClassName="MainNav-is-active">Style Guide</Link>
          <Link to="/login" className="MainNav-item MainNav-login" activeClassName="MainNav-is-active"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
        </nav>
      </div>
    );
  }
}
