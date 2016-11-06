import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import TokoPicker from '../../components/TokoPicker';
import '../pages.css';

export default class Home extends Component {
  render() {
    return (
      <div className="l-app">
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
