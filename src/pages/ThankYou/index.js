import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import DescriptionList from '../../components/DescriptionList';
import Table from '../../components/Table';
import Brand from '../../components/Brand';
import { fetch, set } from '../../services/form';
import { quantify, subtotal, total } from '../../services/product';
import { tokos, products } from '../../models';
import '../pages.css';
import './ThankYou.css';

import base from '../../services/base';

export default class ThankYou extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {},
      user: {},
      toko: {},
    }
  }

  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch 'order' from Local Storage
    const order = fetch(`order-${this.props.params.tokoId}`);

    // Get toko details from firebase.
    base.fetch("stores/" + this.props.params.tokoId, {
      context: this,
      asArray: false,
      then(data){
        console.log('fetching toko ... ');
        console.log(data);
        this.setState({toko: data});
      }
    });

    // Order not again is retrieved from local storage. get 'em from firebase.
    base.fetch("orders/" + this.props.params.tokoId + "/" + this.props.params.orderId, {
      context: this,
      asArray: true,
      then(data){
        console.log('fetching order ... ');
        console.log(data);
        this.setState({order: data});
      }
    });

    if (order) {
      console.log('order: ' + order);
      console.log(order);
      set(this, 'order', order);
    } else {
      // No ordered Item, go back to Toko page
      this.goToToko(this.props.params.tokoId);
    }

    // Fetch 'user' from Local Storage
    const user = fetch('user');
    if (user) {
      set(this, 'user', user);
    }
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
      { term: 'No. Pesanan', definition: '' },
      { term: 'Tanggal Pengiriman', definition: '' },
      { term: 'Nama', definition: user.name },
      { term: 'Panggilan', definition: user.nickname },
      { term: 'Email', definition: user.email },
      { term: 'No. HP', definition: user.phone },
      { term: 'Kota', definition: user.city },
      { term: 'Alamat', definition: user.address },
      { term: 'Catatan', definition: user.notes },
    ];

    const tokoList = [
      { term: 'Nama Toko', definition: toko.name },
      { term: 'Area Layanan', definition: toko.area },
      { term: 'No. HP', definition: toko.phone },
    ];

    const type = {
      'No': 'number',
      'Nama': 'name',
      'Harga': 'price',
      'Jumlah': 'qty',
      'Subtotal': 'price',
    }

    const body =
      Object.keys(order)
        .map((key, id) => {
          const item = products[key];
          const row = {
            'No': id + 1,
            'Nama': item.name,
            'Harga':
            <div>
              Rp {(item.price).toLocaleString('id')}
              <span className="ThankYou-pesanan-unit"> /{item.unit}</span>
            </div>,
            'Jumlah': quantify(order[key], item.step, item.unit),
            'Subtotal': subtotal(order[key], item.step, item.price),
          }
          return row;
        });

    const footerColSpan = {
      'Nama': 2,
      'Harga': 3,
    }
    const footerClassName = {
      1: 'italic',
      2: 'total',
    }
    const productsTotalPrice = total(order, products);
    const footer = [
      {
        'Nama': 'Subtotal',
        'Harga': `Rp ${productsTotalPrice.toLocaleString('id')}`,
      },
      {
        'Nama': 'Ongkos Kirim',
        'Harga': `Rp ${(toko.cost).toLocaleString('id')}`,
      },
      {
        'Nama': 'Total',
        'Harga': `Rp ${(toko.cost + productsTotalPrice).toLocaleString('id')}`,
      },
    ]

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Toko " + this.state.toko.name} />
        <main className="l-ThankYou">  
          <p>Terima kasih telah berbelanja di toko {this.state.toko.name}, berikut detil transaksi Anda:</p>
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
                list={
                  [
                    { term: 'Nama Toko', definition: this.state.toko.name },
                    { term: 'Area Layanan', definition: this.state.toko.area },
                    { term: 'No. HP', definition: this.state.toko.phone },
                  ]
                }
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
