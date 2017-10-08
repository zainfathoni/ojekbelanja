import React from "react";
import { PropTypes as T } from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { getStore, getOrder } from "../reducers";
import Page from "../components/Page";
import Header from "../components/Header";
import PesananForm from "../containers/PesananForm";
import PemesanForm from "../containers/PemesanForm";

let Pesan = ({ id, toko, order }) =>
  !toko || !order || Object.keys(order).length === 0 ? (
    // No ordered Item, go back to Toko page
    <Redirect to={`/toko/${id}`} />
  ) : (
    <Page
      header={<Header heading={"Toko " + toko.name} />}
      left={<PesananForm name="order" id={id} />}
      right={
        <PemesanForm
          name="user"
          storeId={id}
          fields={{
            name: {
              component: "TextField",
              label: "Nama",
              placeholder: "Nama Lengkap"
            },
            nickname: {
              component: "TextField",
              label: "Panggilan",
              placeholder: "Nama Panggilan"
            },
            email: {
              component: "TextField",
              type: "email",
              label: "Email",
              placeholder: "Alamat Email"
            },
            phone: {
              component: "TextField",
              type: "tel",
              display: "content",
              label: "No. HP",
              placeholder: "081234567890"
            },
            city: {
              component: "TextField",
              label: "Kota",
              placeholder: "Kota Domisili"
            },
            address: {
              component: "TextArea",
              label: "Alamat",
              placeholder: "Alamat Lengkap"
            },
            notes: {
              component: "TextArea",
              label: "Catatan",
              placeholder: "Catatan Tambahan"
            }
          }}
        />
      }
    />
  );

Pesan.propTypes = {
  id: T.string.isRequired,
  toko: T.shape({
    name: T.string.isRequired,
    area: T.string.isRequired,
    image: T.string.isRequired,
    cost: T.number.isRequired
  }),
  order: T.objectOf(T.number).isRequired
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.storeId;
  return {
    id,
    toko: getStore(state, id),
    order: getOrder(state)
  };
};

Pesan = connect(mapStateToProps)(Pesan);

export default Pesan;
