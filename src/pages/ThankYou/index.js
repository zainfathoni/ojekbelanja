import React, { Component } from 'react';
import { tokos } from '../../models';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import DescriptionList from '../../components/DescriptionList';
import InfoPesanan from './InfoPesanan';
import '../pages.css';
import './ThankYou.css';

export default class NotFound extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {},
      user: {}
    }
  }

  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch 'order' from Local Storage
    const orderRef = localStorage.getItem(`order-${this.props.params.tokoId}`);
    if (orderRef) {
      const order = JSON.parse(orderRef);
      if (Object.keys(order).length) {
        this.setState({
          order
        })
      } else {
        // No ordered Item, go back to Toko page
        this.goToToko(this.props.params.tokoId);
      }
    }

    // Fetch 'user' from Local Storage
    const userRef = localStorage.getItem('user');
    if (userRef) {
      const user = JSON.parse(userRef);
      if (user) {
        this.setState({
          user
        })
      }
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // Save 'order' to Local Storage
    localStorage.setItem(
      `order-${this.props.params.tokoId}`,
      JSON.stringify(nextState.order));

    if (!Object.keys(nextState.order).length) {
      // No ordered Item, go back to Toko page
      this.goToToko(this.props.params.tokoId);
    }

    // Save 'user' to Local Storage
    localStorage.setItem(
      'user',
      JSON.stringify(nextState.user));
  }

  /*** Render ***/

  render() {
    const tokoId = this.props.params.tokoId;
    const {
      order,
      user,
    } = this.state;

    const list = [];
    list.push({term: "Nama", definition: user.name});
    list.push({term: "Panggilan", definition: user.nickname});
    list.push({term: "Email", definition: user.email});
    list.push({term: "No. HP", definition: user.phone});
    list.push({term: "Kota", definition: user.city});
    list.push({term: "Alamat", definition: user.address});
    list.push({term: "Catatan", definition: user.notes});

    console.log(order);
    console.log(user);
    console.log(list);

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Toko " + tokos[tokoId].name} />
        <main className="l-ThankYou">
          <p>Terima kasih telah berbelanja di toko {tokos[tokoId].name}, berikut detil transaksi Anda:</p>
          <DescriptionList
            list={list}
            />
          <InfoPesanan />
          <h4>Cara Pembayaran</h4>
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
        </main>
      </div>
    );
  }
}
