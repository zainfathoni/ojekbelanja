import React from 'react';
import { PropTypes as T } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getStore } from '../../reducers';
import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Pesanan from './Pesanan';
import PemesanContainer from '../../containers/PemesanContainer';
import '../pages.css';
import './Pesan.css';

let Pesan = ({ id, toko, order }) => {

  return (
    !toko || !order || Object.keys(order).length === 0 ? (
      // No ordered Item, go back to Toko page
      <Redirect to={`/toko/${id}`}/>
    ) : (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Toko " + toko.name} />
        <main className="l-main">
          <div className="l-Pesan">
            <Pesanan
              name="order"
              order={order}
              storeId={id}
              />
          </div>
          <div className="l-Pesan">
            <PemesanContainer
              name="user"
              storeId={id}
              />
          </div>
        </main>
      </div>
    )
  )
};

Pesan.propTypes = {
  id: T.string.isRequired,
  toko: T.shape({
    name: T.string.isRequired,
    area: T.string.isRequired,
    image: T.string.isRequired,
    cost: T.number.isRequired,
  }),
  order: T.objectOf(T.number).isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.storeId;
  return {
    id,
    toko: getStore(state, id),
    order: state.order,
  }
};

Pesan = connect(
  mapStateToProps,
)(Pesan);

export default Pesan;
