import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import DescriptionList from '../../components/DescriptionList';
import Table from '../../components/Table';
import { quantify, subtotal, total } from '../../services/product';
import { tokos, products } from '../../models';
import '../pages.css';
import './ThankYou.css';

export default class ThankYou extends Component {
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

  /*** Methods ***/

  goToToko = (tokoId) => {
    console.log(`Kembali ke Toko ${tokoId}`);
    this.context.router.transitionTo(`/toko/${tokoId}`);
  }

  /*** Render ***/

  render() {
    const tokoId = this.props.params.tokoId;
    const toko = tokos[tokoId];
    const {
      order,
      user,
    } = this.state;

    const list = [
      { term: "Nama", definition: user.name },
      { term: "Panggilan", definition: user.nickname },
      { term: "Email", definition: user.email },
      { term: "No. HP", definition: user.phone },
      { term: "Kota", definition: user.city },
      { term: "Alamat", definition: user.address },
      { term: "Catatan", definition: user.notes },
    ];

    const type = {
      "No": "number",
      "Nama": "name",
      "Harga": "price",
      "Beli": "qty",
      "Subtotal": "price",
    }

    const body =
      Object.keys(order)
        .map((key, id) => {
          const item = products[key];
          const row = {
            "No": id + 1,
            "Nama": item.name,
            "Harga":
            <div>
              {`Rp ${(item.price).toLocaleString('id')}`}
              <span className="ThankYou-pesanan-unit">
                {` /${item.unit}`}
              </span>
            </div>,
            "Beli": quantify(order[key], item.step, item.unit),
            "Subtotal": subtotal(order[key], item.step, item.price),
          }
          return row;
        });

    const footerColSpan = {
      "Nama": 2,
      "Harga": 3,
    }
    const footerClassName = {
      2: "total",
    }
    const footer = [
      {
        "Nama": "Diskon",
        "Harga": `Rp ${(0).toLocaleString('id')}`,
      },
      {
        "Nama": "Ongkos Kirim",
        "Harga": `Rp ${(toko.cost).toLocaleString('id')}`,
      },
      {
        "Nama": "Total",
        "Harga": `Rp ${(toko.cost + total(order, products)).toLocaleString('id')}`,
      },
    ]

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Toko " + toko.name} />
        <main className="l-ThankYou">
          <p>Terima kasih telah berbelanja di toko {toko.name}, berikut detil transaksi Anda:</p>
          <DescriptionList
            list={list}
            />
          <Table
            type={type}
            body={body}
            footerColSpan={footerColSpan}
            footerClassName={footerClassName}
            footer={footer}
            />
          <h4>Cara Pembayaran</h4>
          <ol>
            <li>Make sure you have received the order confirmation email from SayurBox.</li>
            <li>Transfer the total transaction amount with reference to your order number to SayurBox BCA account with the following details:
              <ul>
                <li><b>Account Name : PT. ABCD EFGH</b></li>
                <li><b>Account No : 022 – 1234567</b></li>
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

ThankYou.contextTypes = {
  router: React.PropTypes.object
}
