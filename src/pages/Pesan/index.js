import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Pesanan from './Pesanan';
import Pemesan from './Pemesan';
import { escapeFloatingPoint } from '../../services/product';
import { tokos } from '../../models';
import '../pages.css';

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
    const newUser = this.state.user;
    newUser[field] = value;
    this.setState({
      user: newUser
    })
  }

  /*** Render ***/

  render() {
    const tokoId = this.props.params.tokoId;

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
            <Pemesan
              user={this.state.user}
              onChange={this.updateUser}
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
