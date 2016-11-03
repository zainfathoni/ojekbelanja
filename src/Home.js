import React, { Component } from 'react';

import MainNav from './MainNav';
import Header from './Header';
import TokoPicker from './TokoPicker';
import './css/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="app">
        <MainNav />
        <Header />
        <p>
          Pilih Toko <strong>Ojek Belanja</strong> Anda
        </p>
        <TokoPicker />
      </div>
    );
  }
}
