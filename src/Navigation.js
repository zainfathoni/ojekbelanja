import React, { Component } from 'react';
import { Link } from 'react-router';

import './css/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <header className="nav-container">
        <nav className="nav-wrap">
          <Link to="/" className="nav nav-home">Ojek <i className="material-icons">motorcycle</i><i className="material-icons">shopping_basket</i> Belanja</Link>
          <Link to="/cara-kerja" className="nav nav-item" activeClassName="is-active">Cara Kerja</Link>
          <Link to="/faq" className="nav nav-item" activeClassName="is-active">FAQ</Link>
          <Link to="/tentang-kami" className="nav nav-item" activeClassName="is-active">Tentang Kami</Link>
          <Link to="/login" className="nav nav-login" activeClassName="is-active"><i className="material-icons">exit_to_app</i> Login</Link>
        </nav>
      </header>
    );
  }
}

export default Navigation;
