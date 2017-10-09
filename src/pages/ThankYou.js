import React from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { getStore, getOrderCount, getUser } from "../reducers";
import Page from "../components/Page";
import Header from "../components/Header";
import DescriptionList from "../components/DescriptionList";
import Term from "../components/DescriptionList/Term";
import Description from "../components/DescriptionList/Description";
import OrderTable from "../containers/OrderTable";
import Brand from "../components/Brand";
import "./ThankYou.css";

let ThankYou = ({ storeId, toko, orderCount, user }) =>
  !toko || orderCount === 0 ? (
    // No ordered Item, go back to Toko page
    <Redirect to={`/toko/${storeId}`} />
  ) : (
    <Page header={<Header heading={"Toko " + toko.name} />}>
      <div className="l-ThankYou">
        <p>
          Terima kasih telah berbelanja di toko {toko.name}, berikut detil
          transaksi Anda:
        </p>
        <DescriptionList>
          <Term>No. Pesanan</Term>
          <Description />
          <Term>Tanggal Pengiriman</Term>
          <Description />
          <Term>Nama</Term>
          <Description>{user.name}</Description>
          <Term>Panggilan</Term>
          <Description>{user.nickname}</Description>
          <Term>Email</Term>
          <Description>{user.email}</Description>
          <Term>No. HP</Term>
          <Description>{user.phone}</Description>
          <Term>Kota</Term>
          <Description>{user.city}</Description>
          <Term>Alamat</Term>
          <Description>{user.address}</Description>
          <Term>Catatan</Term>
          <Description>{user.notes}</Description>
        </DescriptionList>
        <OrderTable id={storeId} />
        <h4>Cara Pembayaran</h4>
        <ol>
          <li>
            Pastikan Anda telah menerima email konfirmasi pesanan dari <Brand />.
          </li>
          <li>
            Untuk pertanyaan lebih lanjut, berikut detil informasi toko tempat
            Anda memesan:
            <DescriptionList>
              <Term>Nama Toko</Term>
              <Description>{toko.name}</Description>
              <Term>Area Layanan</Term>
              <Description>{toko.area}</Description>
              <Term>No. HP</Term>
              <Description>{toko.phone}</Description>
            </DescriptionList>
          </li>
          <li>
            Pembayaran dilakukan dengan cara <i>COD (Cash On Delivery)</i>.
          </li>
        </ol>
      </div>
    </Page>
  );

ThankYou.propTypes = {
  storeId: T.string.isRequired,
  toko: T.shape({
    name: T.string.isRequired,
    area: T.string.isRequired,
    image: T.string.isRequired,
    cost: T.number.isRequired
  }),
  orderCount: T.number.isRequired,
  user: T.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const { storeId } = ownProps.match.params;
  return {
    storeId,
    toko: getStore(state, storeId),
    orderCount: getOrderCount(state),
    user: getUser(state)
  };
};

ThankYou = connect(mapStateToProps)(ThankYou);

export default ThankYou;
