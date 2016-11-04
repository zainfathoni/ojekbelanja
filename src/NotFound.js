import React, { Component } from 'react';
import { Link } from 'react-router';

import MainNav from './MainNav';
import Header from './Header';
import './css/NotFound.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className="app">
        <MainNav />
        <Header is404={true} />
        <p>
          Maaf, halaman yang Anda tuju tidak ditemukan.
        </p>
        <p>
          Silakan kembali ke <Link to="/">halaman utama</Link>.
        </p>
      </div>
    );
  }
}
