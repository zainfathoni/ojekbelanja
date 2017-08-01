import React from 'react';
import { PropTypes as T } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getStore, getOrder } from '../../reducers';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Pesanan from './Pesanan';
import PemesanContainer from '../../containers/PemesanContainer';

let Pesan = ({ id, toko, order }) => (
  !toko || !order || Object.keys(order).length === 0 ? (
    // No ordered Item, go back to Toko page
    <Redirect to={`/toko/${id}`}/>
  ) : (
    <Page
      header={<Header heading={"Toko " + toko.name} />}
      twoColumns
      left={<Pesanan
        name="order"
        id={id}
      />}
      right={<PemesanContainer
        name="user"
        storeId={id}
      />}
    />
  )
);

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
    order: getOrder(state),
  }
};

Pesan = connect(
  mapStateToProps,
)(Pesan);

export default Pesan;
