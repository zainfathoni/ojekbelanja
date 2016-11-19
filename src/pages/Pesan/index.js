import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Form from '../../components/Form';
import TextField from '../../components/TextField';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import { update, clear, isEmailValid, isPhoneValid } from '../../services/form';
import Pesanan from './Pesanan';
import { escapeFloatingPoint } from '../../services/product';
import { tokos } from '../../models';
import '../pages.css';
import './Pesan.css';

export default class Pesan extends Component {
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

  goToThankYou = (tokoId) => {
    console.log(`Melanjutkan Pesanan di Toko ${tokoId}`);
    this.context.router.transitionTo(`/thankyou/${tokoId}`);
  }

  updateOrder = (productId, orderQty) => {
    const newOrder = this.state.order;
    newOrder[productId] = escapeFloatingPoint(orderQty);

    this.setState({
      order: newOrder
    })
  }

  removeOrder = (productId) => {
    const newOrder = this.state.order;
    delete newOrder[productId];
    this.setState({
      order: newOrder
    })
  }

  cleanUpOrder = (productId) => {
    const newOrder = this.state.order;

    if (newOrder[productId] <= 0) {
      delete newOrder[productId];
    }

    this.setState({
      order: newOrder
    })
  }

  updateUser = (field, value) => {
    update(this, 'user', field, value)
  }

  clearUser = () => {
    clear(this, 'user');
  }

  isUserInvalid = (user) =>
    !user.name ||
    !isEmailValid(user.email) ||
    !isPhoneValid(user.phone) ||
    !user.city ||
    !user.address;

  onReset = (e) => {
    e.preventDefault();
    this.clearUser();
  }

  onSubmit = (e, tokoId) => {
    e.preventDefault();
    this.goToThankYou(tokoId);
  }

  /*** Render ***/

  render() {
    const tokoId = this.props.params.tokoId;
    const { user } = this.state;

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Toko " + tokos[tokoId].name} />
        <main className="l-main">
          <div className="l-Pesan">
            <Pesanan
              tokoId={tokoId}
              order={this.state.order}
              goBack={this.goToToko}
              update={this.updateOrder}
              remove={this.removeOrder}
              cleanUp={this.cleanUpOrder}
              />
          </div>
          <div className="l-Pesan">
            <Form
              title="Data Pemesan"
              icon={<i className="fa fa-lg fa-address-card" aria-hidden="true"></i>}
              onSubmit={(e) => this.onSubmit(e, tokoId)}
              footer={
                <div>
                  <Button
                    className="Pemesan-footer-clear"
                    type="reset"
                    display="content"
                    action={(e) => this.onReset(e)}
                    icon="times"
                    text="Bersihkan"
                    disabled={!Object.keys(user).length}
                    title={!Object.keys(user).length ? "Data sudah bersih" : "Bersihkan data"}
                    isSecondary
                    />
                  <Button
                    className="Pemesan-footer-done"
                    type="submit"
                    display="content"
                    action={(e) => this.onSubmit(e, tokoId)}
                    icon="cart-arrow-down"
                    text="Selesai"
                    disabled={this.isUserInvalid(user)}
                    title={this.isUserInvalid(user) ? "Masih ditemukan data yang tidak valid" : "Konfirmasi Pemesanan"}
                    />
                </div>
              }
              >
              <TextField
                name="name"
                label="Nama"
                placeholder="Nama Lengkap"
                value={user.name}
                onChange={this.updateUser}
                required
                />
              <TextField
                name="nickname"
                label="Panggilan"
                placeholder="Nama Panggilan"
                value={user.nickname}
                onChange={this.updateUser}
                />
              <TextField
                type="email"
                name="email"
                label="Email"
                placeholder="Alamat Email"
                value={user.email}
                onChange={this.updateUser}
                validate={isEmailValid}
                message="Alamat Email tidak valid"
                required
                />
              <TextField
                type="tel"
                display="content"
                name="phone"
                label="No. HP"
                placeholder="081234567890"
                value={user.phone}
                onChange={this.updateUser}
                validate={isPhoneValid}
                message="No. HP tidak valid"
                required
                />
              <TextField
                type="text"
                name="city"
                label="Kota"
                placeholder="Kota Domisili"
                value={user.city}
                onChange={this.updateUser}
                required
                />
              <TextArea
                name="address"
                label="Alamat"
                placeholder="Alamat Lengkap"
                value={user.address}
                rows={4}
                onChange={this.updateUser}
                required
                />
              <TextArea
                name="notes"
                label="Catatan"
                placeholder="Catatan Tambahan"
                value={user.notes}
                onChange={this.updateUser}
                />
            </Form>
          </div>

        </main>
      </div>
    )
  }
}

Pesan.contextTypes = {
  router: React.PropTypes.object
}
