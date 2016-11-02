import React, { Component } from 'react';
import { Link } from 'react-router';

import './css/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Ojek Belanja</Link>
        <Link to="/cara-kerja">Cara Kerja</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/tentang-kami">Tentang Kami</Link>
      </nav>
    );
  }
}

export default Navigation;
