import React, { Component } from 'react';
import { Link } from 'react-router';

import './css/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/" className="home">Ojek <i className="material-icons">motorcycle</i><i className="material-icons">shopping_basket</i> Belanja</Link>
          <Link to="/cara-kerja" activeClassName="active">Cara Kerja</Link>
          <Link to="/faq" activeClassName="active">FAQ</Link>
          <Link to="/tentang-kami" activeClassName="active">Tentang Kami</Link>
        </nav>
      </header>
    );
  }
}

export default Navigation;
