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
        <main className="l-ThankYou">
          <p>Hai Zain, berikut detil transaksi Anda:</p>
          <InfoPemesan />
          <InfoPesanan />
          <h4>Cara Pembayaran</h4>
          <p>
            <ol>
              <li>Make sure you have received the order confirmation email from SayurBox.</li>
              <li>Transfer the total transaction amount with reference to your order number to SayurBox BCA account with the following details:
              <ul>
                  <li><b>Account Name : PT. KREASI NOSTRA MANDIRI</b></li>
                  <li><b>Account No : 006 – 9197771</b></li>
                </ul>
              </li>
              <li>Please make payment by :<div><b>Monday 5 p.m</b> for Wednesday’s delivery, and <b>Thursday by 5 p.m</b> for Saturday’s delivery to avoid order cancellation.</div>Once you have paid, you will receive a whatsapp or email confirmation.
              </li>
            </ol>
          </p>
        </main>
      </div>
    );
  }
}
