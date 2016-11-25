import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Pesanan from './Pesanan';
import Pemesan from './Pemesan';
import { fetch, save, set } from '../../services/form';
import { tokos } from '../../models';
import '../pages.css';
import './Pesan.css';

import base from '../../services/base';

export default class Pesan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {},
      user: {},
      toko: "",
    }
  }

  /*** Lifecycle ***/

  // Called when component being inserted to DOM.
  componentDidMount() {
    base.fetch("stores/" + this.props.params.tokoId, {
        context: this,
        asArray: false,
        then(data){
          console.log(data.name);
          this.setState({toko : data.name});
        }
    });
  }

  componentWillMount() {
    // Fetch 'order' from Local Storage
    const order = fetch(`order-${this.props.params.tokoId}`);
    if (order) {
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

  componentWillUpdate(nextProps, nextState) {
    // Save 'order' to Local Storage
    save(`order-${this.props.params.tokoId}`, nextState.order);

    // Save 'user' to Local Storage
    save('user', nextState.user);

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

  goToThankYou = (tokoId) => {
    console.log(`Melanjutkan Pesanan di Toko ${tokoId}`);
    this.context.router.transitionTo(`/thankyou/${tokoId}`);
  }

  /*** Render ***/

  render() {
    const tokoId = this.props.params.tokoId;

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Toko " + this.state.toko} />
        <main className="l-main">
          <div className="l-Pesan">
            <Pesanan
              name={"order"}
              context={this}
              tokoId={tokoId}
              action={this.goToToko}
              />
          </div>
          <div className="l-Pesan">
            <Pemesan
              name={"user"}
              context={this}
              tokoId={tokoId}
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
