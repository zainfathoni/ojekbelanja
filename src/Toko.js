import React, { Component } from 'react';

import Header from './Header';
import MainNav from './MainNav';
import './css/Home.css';

export default class Toko extends Component {
  render() {
    return (
      <div className="app">
        <MainNav />
        <Header />
        <p>
          Selamat datang di toko <code>{this.props.params.tokoId}</code>.
        </p>
      </div>
    );
  }
}
