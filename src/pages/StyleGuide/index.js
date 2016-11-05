import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import TokoPicker from '../../components/TokoPicker';
import '../Home/Home.css';

export default class StyleGuide extends Component {
  render() {
    return (
      <div className="app">
        <MainNav />
        <Header />
        <Header is404 />
        <p>
          Pilih Toko <strong>Ojek Belanja</strong> Anda
        </p>
        <TokoPicker />
      </div>
    );
  }
}
