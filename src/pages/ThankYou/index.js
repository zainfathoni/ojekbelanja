import React, { Component } from 'react';
import { tokos } from '../../models';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import InfoPemesan from './InfoPemesan';
import InfoPesanan from './InfoPesanan';
import '../pages.css';
import './ThankYou.css'

export default class NotFound extends Component {
  render() {
    const tokoId = this.props.params.tokoId;

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Terima kasih telah berbelanja di Toko " + tokos[tokoId].name} />
        <p>Hai Zain, berikut detil transaksi Anda:</p>
        <main className="l-ThankYou">
          <InfoPemesan />
          <InfoPesanan />
        </main>
      </div>
    );
  }
}
