import React, { Component } from 'react';

import MainNav from '../../components/MainNav/MainNav';
import Header from '../../components/Header/Header';
import TokoPicker from '../../components/TokoPicker/TokoPicker';
import './Home.css';

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
