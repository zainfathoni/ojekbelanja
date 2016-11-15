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
      user: {
        name: 'Zain Fathoni',
        nickname: 'Zain',
        email: 'zain.fathoni@gmail.com'
      }
    }
  }

  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch 'order' from Local Storage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.tokoId}`);
    if (localStorageRef) {
      const order = JSON.parse(localStorageRef);
      if (Object.keys(order).length) {
        this.setState({
          order
        })
      } else {
        // No ordered Item, go back to Toko page
        this.goToToko(this.props.params.tokoId);
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

  updateUser = (field, value) => {
    let newUser = this.state.user;
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
        <div className="l-wrapper-mainnav">
          <MainNav />
        </div>
        <Header heading={"Toko " + tokos[tokoId].name} />
        <main className="l-wrapper-filter">
          <div className="l-pesan">
            <Pesanan
              tokoId={tokoId}
              order={this.state.order}
              kembali={this.goToToko}
              update={this.updateOrder}
              remove={this.remove}
              />
          </div>
          <div className="l-pesan">
            <Pemesan
              user={this.state.user}
              update={this.updateUser}
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
