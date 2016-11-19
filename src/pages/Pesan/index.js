import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Form from '../../components/Form';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import Pemesan from './Pemesan';
import { update, clear, isEmailValid, isPhoneValid } from '../../services/form';
import { escapeFloatingPoint, quantify, subtotal, total } from '../../services/product';
import { tokos, products } from '../../models';
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
    const { order, user } = this.state;

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Toko " + tokos[tokoId].name} />
        <main className="l-main">
          <div className="l-Pesan">
            <Form
              title="Pesanan Anda"
              icon={<i className="fa fa-lg fa-shopping-cart" aria-hidden="true"></i>}
              onSubmit={(e) => this.onSubmit(e, tokoId)}
              header={
                <Button
                className="Pesanan-heading-action"
                display="content"
                action={(e) => this.goToToko(tokoId)}
                icon="arrow-left"
                text="Kembali"
                isSecondary
                isSmall
                />
              }
              footer={
                <div className="Pesanan-footer">
                  <div className="Pesanan-footer-delivery-fee">
                    <div className="Pesanan-footer-delivery-fee-label">
                      Ongkos Kirim
                    </div>
                    <div className="Pesanan-footer-delivery-fee-amount">
                      {`Rp ${(tokos[tokoId].cost).toLocaleString('id')}`}
                    </div>
                  </div>
                  <hr />
                  <div className="Pesanan-footer-total-price">
                    <div className="Pesanan-footer-total-price-label">
                      Harga Total
                    </div>
                    <div className="Pesanan-footer-total-price-amount">
                      {`Rp ${(tokos[tokoId].cost + total(order, products)).toLocaleString('id')}`}
                    </div>
                  </div>
                </div>
              }
              >
              {Object.keys(order)
                .map(key => {
                  const item = products[key];
                  return (
                    <table key={key} className="Pesanan-item">
                      <tbody>
                        <tr>
                          <td width="10%" className="Pesanan-item-image-wrapper">
                            <img
                              className="Pesanan-item-image"
                              src={require(`../../css/images/${item.image}`)}
                              alt={item.name}
                              />
                          </td>
                          <td width="72%" className="Pesanan-item-detail">
                            <table width="100%">
                              <tbody>
                                <tr>
                                  <td width="100%">
                                    <div className="Pesanan-item-name">
                                      {item.name}
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="Pesanan-item-price-per-unit">
                                    <span className="Pesanan-item-price">
                                      {`Rp ${(item.price).toLocaleString('id')}`}
                                    </span>
                                    <span className="Pesanan-item-unit">
                                      {`/${item.unit}`}
                                    </span>
                                    <div className="Pesanan-item-order-quantified">
                                      {quantify(order[key], item.step, item.unit)}
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="Pesanan-item-total-price">
                                      {subtotal(order[key], item.step, item.price)}
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td width="10%" className="Pesanan-item-order-qty">
                            <TextField
                              className="Pesanan-item-order-qty-input"
                              name={key}
                              type="number"
                              display="fixed"
                              value={escapeFloatingPoint(order[key] * item.step)}
                              onChange={(name, value) => this.updateOrder(key, value / item.step)}
                              onBlur={(name, value) => this.cleanUpOrder(key)}
                              noValidation
                              min={0}
                              step={item.step}
                              />
                            <span className="Pesanan-item-order-qty-unit">
                              {item.unit}
                            </span>
                          </td>
                          <td width="8%" className="Pesanan-item-order-qty-action">
                            <Button
                              display="icon"
                              action={(e) => this.removeOrder(key)}
                              icon="trash"
                              text="Hapus"
                              isSecondary
                              isSmall
                              />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )
                })
              }
            </Form>
          </div>
          <div className="l-Pesan">
            <Pemesan
              user={user}
              tokoId={tokoId}
              onChange={this.updateUser}
              onReset={this.onReset}
              onSubmit={this.onSubmit}
              />
          </div>

        </main>
      </div>
    )
  }
}

Pesan.contextTypes = {
  router: React.PropTypes.object
}
