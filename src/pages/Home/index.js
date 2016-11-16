import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import TokoPicker from './TokoPicker';
import '../pages.css';

export default class Home extends Component {
  render() {
    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header />
        <p>
          Pilih Toko <strong>Ojek Belanja</strong> Anda
        </p>
        <TokoPicker />
      </div>
    );
  }
}
