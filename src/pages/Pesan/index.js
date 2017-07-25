import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Pesanan from './Pesanan';
import Pemesan from './Pemesan';
import { fetch, save, set } from '../../services/form';
import { stores } from '../../models';
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
    const order = fetch(`order-${this.props.params.storeId}`);
    if (order) {
      set(this, 'order', order);
    } else {
      // No ordered Item, go back to Toko page
      this.goToToko(this.props.params.storeId);
    }

    // Fetch 'user' from Local Storage
    const user = fetch('user');
    if (user) {
      set(this, 'user', user);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // Save 'order' to Local Storage
    save(`order-${this.props.params.storeId}`, nextState.order);

    // Save 'user' to Local Storage
    save('user', nextState.user);

    if (!Object.keys(nextState.order).length) {
      // No ordered Item, go back to Toko page
      this.goToToko(this.props.params.storeId);
    }
  }

  /*** Methods ***/

  goToToko = (storeId) => {
    console.log(`Kembali ke Toko ${storeId}`);
    this.context.router.transitionTo(`/toko/${storeId}`);
  }

  goToThankYou = (storeId) => {
    console.log(`Melanjutkan Pesanan di Toko ${storeId}`);
    this.context.router.transitionTo(`/thankyou/${storeId}`);
  }

  /*** Render ***/

  render() {
    const storeId = this.props.params.storeId;

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Toko " + stores[storeId].name} />
        <main className="l-main">
          <div className="l-Pesan">
            <Pesanan
              name={"order"}
              context={this}
              storeId={storeId}
              action={this.goToToko}
              />
          </div>
          <div className="l-Pesan">
            <Pemesan
              name={"user"}
              context={this}
              storeId={storeId}
              action={this.goToThankYou}
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
