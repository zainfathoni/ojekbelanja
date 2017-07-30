import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Pesanan from './Pesanan';
import PemesanContainer from '../../containers/PemesanContainer';
import { stores } from '../../models';
import '../pages.css';
import './Pesan.css';

let Pesan = ({ match, order }) => {
  const storeId = match.params.storeId;

  return (
    !order || Object.keys(order).length === 0 ? (
      // No ordered Item, go back to Toko page
      <Redirect to={`/toko/${storeId}`}/>
    ) : (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Toko " + stores[storeId].name} />
        <main className="l-main">
          <div className="l-Pesan">
            <Pesanan
              name="order"
              order={order}
              storeId={storeId}
              />
          </div>
          <div className="l-Pesan">
            <PemesanContainer
              name="user"
              storeId={storeId}
              />
          </div>

        </main>
      </div>
    )
  )
};

const mapStateToProps = (state, ownProps) => ({
  order: state.order,
});

Pesan = connect(
  mapStateToProps,
)(Pesan);

export default Pesan;
