import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import TokoPicker from '../../components/TokoPicker';
import '../pages.css';

export default class Home extends Component {
  render() {
    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-mainnav">
          <MainNav />
        </div>
        <Header />
        <p>
          Pilih Toko <strong>Ojek Belanja</strong> Anda
        </p>
        {/* TODO: Move TokoPicker component under Home page, because it is only used here */}
        <TokoPicker />
      </div>
    );
  }
}
