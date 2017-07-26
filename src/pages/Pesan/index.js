import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from "react-redux";
import { orderLoad, setCost, userLoad } from "../../actions";

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Pesanan from './Pesanan';
import PemesanContainer from '../../containers/PemesanContainer';
import { fetch, save } from '../../services/form';
import { stores } from '../../models';
import '../pages.css';
import './Pesan.css';

class Pesan extends Component {
  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch 'order' from Local Storage
    const order = fetch(`order-${this.props.params.storeId}`);
    
    if (order) {
      // set(this, 'order', order);
      this.props.updateOrder(order);
      this.props.updateCost();
    } else {
      // No ordered Item, go back to Toko page
      this.goToToko(this.props.params.storeId);
    }

    // Fetch 'user' from Local Storage
    const user = fetch('user');
    
    if (user) {
      // set(this, 'user', user);
      this.props.updateUser(user);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (!Object.keys(nextProps.order).length) {
      // No ordered Item, go back to Toko page
      this.goToToko(this.props.params.storeId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Save 'order' to Local Storage
    save(`order-${this.props.params.storeId}`, this.props.order);
    // Save 'user' to Local Storage
    save('user', this.props.user);
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
              order={this.props.order}
              storeId={storeId}
              action={this.goToToko}
              />
          </div>
          <div className="l-Pesan">
            <PemesanContainer
              name={"user"}
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
  router: T.object
}

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateOrder: (order) => {
      dispatch(orderLoad(order));
    },
    updateCost: () => {
      dispatch(setCost(stores[ownProps.params.storeId].cost));
    },
    updateUser: (user) => {
      dispatch(userLoad(user));
    }
  };
};

Pesan = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pesan);

export default Pesan;
