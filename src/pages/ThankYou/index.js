import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import DescriptionList from '../../components/DescriptionList';
import Table from '../../components/Table';
import Brand from '../../components/Brand';
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

    const pemesanList = [
      { term: "No. Pesanan", definition: "" },
      { term: "Tanggal Pengiriman", definition: "" },
      { term: "Nama", definition: user.name },
      { term: "Panggilan", definition: user.nickname },
      { term: "Email", definition: user.email },
      { term: "No. HP", definition: user.phone },
      { term: "Kota", definition: user.city },
      { term: "Alamat", definition: user.address },
      { term: "Catatan", definition: user.notes },
    ];

    const tokoList = [
      { term: "Nama Toko", definition: toko.name },
      { term: "Area Layanan", definition: toko.area },
      { term: "No. HP", definition: toko.phone },
    ];

    const type = {
      "No": "number",
      "Nama": "name",
      "Harga": "price",
      "Jumlah": "qty",
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
              Rp {(item.price).toLocaleString('id')}
              <span className="ThankYou-pesanan-unit"> /{item.unit}</span>
            </div>,
            "Jumlah": quantify(order[key], item.step, item.unit),
            "Subtotal": subtotal(order[key], item.step, item.price),
          }
          return row;
        });

    const footerColSpan = {
      "Nama": 2,
      "Harga": 3,
    }
    const footerClassName = {
      0: "reverse",
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
            list={pemesanList}
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
            <li>Pastikan Anda telah menerima email konfirmasi pesanan dari <Brand />.</li>
            <li>Untuk pertanyaan lebih lanjut, berikut detil informasi toko tempat Anda memesan:
              <DescriptionList
                list={tokoList}
                />
            </li>
            <li>Pembayaran dilakukan dengan cara <i>COD (Cash On Delivery)</i>.</li>
          </ol>
        </main>
      </div>
    );
  }
}

ThankYou.contextTypes = {
  router: React.PropTypes.object
}
