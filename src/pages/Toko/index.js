import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import '../Home/Home.css';

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
