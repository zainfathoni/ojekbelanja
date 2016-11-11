import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import { quantify, escapeFloatingPoint } from '../../services/product';
import { tokos, products } from '../../models';
import '../pages.css';
import './Pesan.css';

export default class Pesan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {}
    }
  }

  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch 'order' from Local Storage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.tokoId}`);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // Save 'order' to Local Storage
    localStorage.setItem(
      `order-${this.props.params.tokoId}`,
      JSON.stringify(nextState.order));
  }

  /*** Methods ***/

  goToToko = (tokoId) => {
    console.log(`Kembali ke Toko ${tokoId}`);
    this.context.router.transitionTo(`/toko/${tokoId}`);
  }

  updateOrder = (productId, orderQty) => {
    let newOrder = this.state.order;
    newOrder[productId] = escapeFloatingPoint(orderQty);
    this.setState({
      order: newOrder
    })
  }

  remove = (productId) => {
    let newOrder = this.state.order;
    delete newOrder[productId];
    this.setState({
      order: newOrder
    })
  }

  /*** Render ***/

  render() {
    const { tokoId } = this.props.params;
    const { order } = this.state;

    // Calculate Price
    const totalPrice =
      Object.keys(order)
        .reduce(
        (sum, key) =>
          sum + (products[key].price * products[key].step * order[key])
        ,
        0
        );

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-mainnav">
          <MainNav />
        </div>
        <Header heading={"Toko " + tokos[tokoId].name} />
        <main className="l-wrapper-filter">
          <div className="l-pesan">
            <div className="pesanan">
              <div className="pesanan-heading">
                <div className="pesanan-heading-title">
                  <i className="material-icons">&#xE8CC;</i>
                  Pesanan Anda
                </div>
                <button
                  className="pesanan-heading-action order-action order-action-clear"
                  onClick={(e) => this.goToToko(tokoId)}>
                  <i className="material-icons">&#xE5C4;</i>
                  Kembali ke Toko
                </button>
              </div>
              <div className="pesanan-body">
                {Object.keys(order)
                  .map(key => {
                    const item = products[key];
                    return (
                      <table key={key} className="pesanan-item">
                        <tbody>
                          <tr>
                            <td width="17%">
                              <img
                                className="pesanan-item-image"
                                src={require(`../../css/images/${item.image}`)}
                                alt={item.name}
                                />
                            </td>
                            <td width="63%" className="pesanan-item-detail">
                              <table width="100%">
                                <tbody>
                                  <tr>
                                    <td width="100%">
                                      <div className="pesanan-item-name">
                                        {item.name}
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="pesanan-item-price-per-unit">
                                      <span className="pesanan-item-price">
                                        {`Rp ${(item.price).toLocaleString('id')}`}
                                      </span>
                                      <span className="pesanan-item-unit">
                                        {` / ${item.unit}`}
                                      </span>
                                      <div className="pesanan-item-order-quantified">
                                        {quantify(order[key], item.step, item.unit)}
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="pesanan-item-total-price">
                                        {`Rp ${(item.price * item.step * order[key]).toLocaleString('id')}`}
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td width="10%" className="pesanan-item-order-qty">
                              <input
                                className="pesanan-item-order-qty-input"
                                type="number"
                                step={item.step}
                                value={escapeFloatingPoint(order[key] * item.step)}
                                onChange={(e) => this.updateOrder(key, e.target.value / item.step)}
                                />
                              <span className="pesanan-item-order-qty-unit">
                                {item.unit}
                              </span>
                            </td>
                            <td width="10%" className="pesanan-item-order-qty-action">
                              <button
                                className="order-action order-action-clear"
                                onClick={(e) => this.remove(key)}>
                                <i className="material-icons">&#xE872;</i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )
                  })
                }
              </div>
              <div className="pesanan-footer">
                <div className="pesanan-footer-delivery-fee">
                  <div className="pesanan-footer-delivery-fee-label">
                    Ongkos Kirim
                  </div>
                  <div className="pesanan-footer-delivery-fee-amount">
                    {`Rp ${(tokos[tokoId].cost).toLocaleString('id')}`}
                  </div>
                </div>
                <hr />
                <div className="pesanan-footer-total-price">
                  <div className="pesanan-footer-total-price-label">
                    Harga Total
                  </div>
                  <div className="pesanan-footer-total-price-amount">
                    {`Rp ${(tokos[tokoId].cost + totalPrice).toLocaleString('id')}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="l-pesan">
          </div>

        </main>
      </div>
    )
  }
}

Pesan.contextTypes = {
  router: React.PropTypes.object
}
