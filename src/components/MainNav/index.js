import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNav.css';

export default function MainNav(props) {
  return (
    <div className="l-MainNav">
      <nav className="MainNav">
        <NavLink to="/" className="MainNav-item MainNav-home">Ojek <i className="fa fa-motorcycle" aria-hidden="true"></i><i className="fa fa-shopping-cart" aria-hidden="true"></i> Belanja</NavLink>
        <NavLink to="/cara-kerja" className="MainNav-item" activeClassName="MainNav-is-active">Cara Kerja</NavLink>
        <NavLink to="/faq" className="MainNav-item" activeClassName="MainNav-is-active">FAQ</NavLink>
        <NavLink to="/tentang-kami" className="MainNav-item" activeClassName="MainNav-is-active">Tentang Kami</NavLink>
        <NavLink to="/styleguide" className="MainNav-item" activeClassName="MainNav-is-active">Style Guide</NavLink>
        <NavLink to="/login" className="MainNav-item MainNav-login" activeClassName="MainNav-is-active"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</NavLink>
      </nav>
    </div>
  );
}
