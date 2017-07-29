import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { orderLoad, userLoad } from "../../actions";

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
    }

    // Fetch 'user' from Local Storage
    const user = fetch('user');
    
    if (user) {
      // set(this, 'user', user);
      this.props.updateUser(user);
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
      !this.props.order || Object.keys(this.props.order).length === 0 ? (
        // No ordered Item, go back to Toko page
        <Redirect to={`/toko/${this.props.match.params.storeId}`}/>
      ) : (
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
