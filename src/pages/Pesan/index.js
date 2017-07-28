import React, { Component } from 'react';
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
    const order = fetch(`order-${this.props.match.params.storeId}`);
    
    if (order) {
      // set(this, 'order', order);
      this.props.updateOrder(order);
      this.props.updateCost();
    } else {
      // No ordered Item, go back to Toko page
      this.goToToko(this.props.match.params.storeId);
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
      this.goToToko(this.props.match.params.storeId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Save 'order' to Local Storage
    save(`order-${this.props.match.params.storeId}`, this.props.order);
    // Save 'user' to Local Storage
    save('user', this.props.user);
  }

  /*** Render ***/

  render() {
    const storeId = this.props.match.params.storeId;

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
              />
          </div>
          <div className="l-Pesan">
            <PemesanContainer
              name={"user"}
              storeId={storeId}
              />
          </div>

        </main>
      </div>
    )
  }
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
      dispatch(setCost(stores[ownProps.match.params.storeId].cost));
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
